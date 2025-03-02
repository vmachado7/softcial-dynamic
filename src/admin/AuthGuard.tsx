import React, { useEffect, useState, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import ApiService from './services/ApiService';

interface AdminAuthGuardProps {
  children: ReactElement;
  redirectTo?: string;
}

// Define type for admin check response
interface AdminCheckResponse {
  isAdmin: boolean;
  nivel?: number;
  usuario?: {
    nombre: string;
    correo: string;
    verificado: boolean;
  };
}

export function AdminAuthGuard({ 
  children, 
  redirectTo = '/admin' 
}: AdminAuthGuardProps): ReactElement {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userInfo = localStorage.getItem('userInfo');
        
        if (!userInfo) {
          navigate(redirectTo);
          return;
        }
        
        const user = JSON.parse(userInfo);
        
        // Verify in the API if the user is an administrator
        const adminCheck = await ApiService.checkAdmin(user.id) as AdminCheckResponse;
        
        if (!adminCheck.isAdmin) {
          navigate('/sign-in');
          return;
        }
        
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error verifying authentication:', error);
        navigate(redirectTo);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate, redirectTo]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Verificando credenciales...
        </Typography>
      </Box>
    );
  }

  // Always return a ReactElement
  return isAuthenticated ? children : <Box></Box>;
}

export default AdminAuthGuard;