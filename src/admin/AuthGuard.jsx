import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import ApiService from './services/ApiService';

/**
 * Componente protector para rutas de administrador
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Elementos hijos que se renderizarán si el usuario está autenticado
 * @param {string} props.redirectTo - Ruta a la que redirigir si el usuario no está autenticado
 * @returns {React.ReactNode}
 */
export function AdminAuthGuard({ children, redirectTo = '/admin' }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si hay un usuario autenticado
    const checkAuth = async () => {
      try {
        const userInfo = localStorage.getItem('userInfo');
        
        if (!userInfo) {
          // No hay usuario autenticado
          navigate(redirectTo);
          return;
        }
        
        const user = JSON.parse(userInfo);
        
        // Verificar en la API si es administrador
        const adminCheck = await ApiService.checkAdmin(user.id);
        
        if (!adminCheck.isAdmin) {
          // El usuario no es administrador
          navigate('/sign-in');
          return;
        }
        
        // Usuario administrador autenticado
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error verificando autenticación:', error);
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

  return isAuthenticated ? children : null;
}

export default AdminAuthGuard;