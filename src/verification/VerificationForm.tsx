import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  InputAdornment,
  IconButton
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import BackspaceIcon from '@mui/icons-material/Backspace';

const VerificationForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Get email from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email') || '';

  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('No se encontró un correo electrónico para verificar');
      return;
    }

    if (!verificationCode || verificationCode.length < 6) {
      setError('Por favor ingrese un código de verificación válido');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://softcial-reports-backend.onrender.com/api/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo: email,
          codigo: verificationCode
        })
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Error al verificar el código');
      } else {
        setSuccess(true);
        // Redirigir después de 3 segundos
        setTimeout(() => {
          navigate('/sign-in');
        }, 3000);
      }
    } catch (error) {
      console.error('Error al verificar código:', error);
      setError('Error de conexión. Intente de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearCode = () => {
    setVerificationCode('');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            mb: 3
          }}>
            <img
              src="https://montenegrodanielfelipe.com/softcial/svg/softcial.svg"
              style={{ width: '150px', height: 'auto', marginBottom: '24px' }}
              alt="Softcial Logo"
            />
            <Typography component="h1" variant="h5" gutterBottom>
              Verificación de Cuenta
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
              Por favor ingrese el código de verificación enviado a su correo electrónico
            </Typography>
          </Box>

          {success ? (
            <Box sx={{ textAlign: 'center', my: 3 }}>
              <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                ¡Verificación exitosa!
              </Typography>
              <Typography variant="body1">
                Su cuenta ha sido verificada correctamente. Será redirigido al inicio de sesión en unos segundos...
              </Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              {error && (
                <Alert 
                  severity="error" 
                  icon={<ErrorIcon />}
                  sx={{ mb: 2 }}
                >
                  {error}
                </Alert>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                value={email}
                disabled
                sx={{ mb: 3 }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="code"
                label="Código de verificación"
                id="code"
                placeholder="Ingrese el código de 6 dígitos"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                autoFocus
                InputProps={{
                  endAdornment: verificationCode && (
                    <InputAdornment position="end">
                      <IconButton onClick={clearCode} edge="end">
                        <BackspaceIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading}
                sx={{ mt: 3, mb: 2, py: 1.5 }}
              >
                {isLoading ? (
                  <CircularProgress size={24} />
                ) : (
                  'Verificar Cuenta'
                )}
              </Button>

              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button
                  variant="text"
                  onClick={() => navigate('/sign-in')}
                  size="small"
                >
                  Volver al inicio de sesión
                </Button>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default VerificationForm;