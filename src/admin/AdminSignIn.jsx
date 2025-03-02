import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// Componentes MUI
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import LockIcon from '@mui/icons-material/Lock';
import Alert from '@mui/material/Alert';

// Componentes personalizados
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { Card, SignInContainer } from './SignInStyles';

// Servicios
import ApiService from './services/ApiService';

export default function AdminSignIn(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [serverError, setServerError] = React.useState('');
  const [adminKeyError, setAdminKeyError] = React.useState(false);
  const [adminKeyErrorMessage, setAdminKeyErrorMessage] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validar inputs antes de continuar
    if (!validateInputs()) {
      return;
    }
    
    setIsLoading(true);
    setServerError('');
    
    const data = new FormData(event.currentTarget);
    const userData = {
      correo: data.get('email'),
      contraseña: data.get('password'),
      adminKey: data.get('adminKey')
    };
    
    try {
      // Usar el nuevo endpoint específico para administradores
      const response = await fetch('https://softcial-reports-backend.onrender.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        if (response.status === 401) {
          setServerError('Credenciales inválidas. Verifique su correo, contraseña o código de administrador.');
        } else if (response.status === 403) {
          setServerError('No tiene permisos de administrador para acceder a esta área.');
        } else {
          setServerError(result.error || 'Error al iniciar sesión. Intente más tarde.');
        }
      } else {
        console.log('Login de administrador exitoso:', result);
        
        // Guardar datos del administrador en localStorage
        localStorage.setItem('userInfo', JSON.stringify(result.admin));
        
        // Redirigir al usuario a la página de administración
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      setServerError('Error de conexión. Verifique su conexión a internet.');
    } finally {
      setIsLoading(false);
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const adminKey = document.getElementById('adminKey');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Ingrese una dirección de correo válida');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('La contraseña debe tener al menos 6 caracteres');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!adminKey.value) {
      setAdminKeyError(true);
      setAdminKeyErrorMessage('El código de administrador es requerido');
      isValid = false;
    } else {
      setAdminKeyError(false);
      setAdminKeyErrorMessage('');
    }

    return isValid;
  };
  
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        
        <Card variant="outlined">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            mb: 2
          }}>
            <LockIcon sx={{ 
              fontSize: 40, 
              p: 1, 
              borderRadius: '50%', 
              bgcolor: 'primary.main', 
              color: 'white',
              mb: 1
            }} />
            <Typography
              component="h1"
              variant="h4"
              sx={{ fontSize: 'clamp(1.8rem, 8vw, 2rem)' }}
            >
              Panel de Administración
            </Typography>
            <img
              src="https://montenegrodanielfelipe.com/softcial/svg/softcial.svg"
              style={{ width: '100px', height: 'auto', marginTop: '12px' }}
              alt="Softcial Logo"
            />
          </Box>
          
          <Alert severity="info" sx={{ mb: 2 }}>
            Acceso exclusivo para personal autorizado
          </Alert>
          
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            {serverError && (
              <Alert severity="error">
                {serverError}
              </Alert>
            )}
            
            <FormControl>
              <FormLabel htmlFor="email">Email Administrativo</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="admin@softcial.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            
            <FormControl>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            
            <FormControl>
              <FormLabel htmlFor="adminKey">Código de Administrador</FormLabel>
              <TextField
                error={adminKeyError}
                helperText={adminKeyErrorMessage}
                name="adminKey"
                placeholder="Ingrese el código de acceso"
                type="password"
                id="adminKey"
                required
                fullWidth
                variant="outlined"
                color={adminKeyError ? 'error' : 'primary'}
              />
            </FormControl>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={20} /> : null}
              sx={{ 
                mt: 1,
                bgcolor: 'primary.dark',
                '&:hover': {
                  bgcolor: 'primary.main',
                }
              }}
            >
              {isLoading ? 'Verificando...' : 'Acceder como Administrador'}
            </Button>
            
            <Button
              variant="text"
              onClick={() => navigate('/sign-in')}
              size="small"
            >
              Volver al inicio de sesión normal
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}