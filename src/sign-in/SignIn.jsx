import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// Componentes MUI
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';

// Componentes personalizados
import AppTheme from '../shared-theme/AppTheme';
import ForgotPassword from './ForgotPassword';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { GoogleIcon, XIcon } from './CustomIcons';
import { Card, SignInContainer } from './SignInStyles';

// Terceros
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

export default function SignIn(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [serverError, setServerError] = React.useState('');
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    };
    
    try {
      const response = await fetch('https://softcial-reports-endpoint.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        if (response.status === 401) {
          // Credenciales inválidas
          setServerError('Correo o contraseña incorrectos. Intente nuevamente.');
        } else if (response.status === 403 && result.requiresVerification) {
          // Cuenta no verificada
          setServerError('Su cuenta no ha sido verificada. Por favor revise su correo electrónico.');
        } else {
          // Otro error
          setServerError(result.error || 'Ocurrió un error al iniciar sesión. Intente más tarde.');
        }
      } else {
        // Login exitoso
        console.log('Login exitoso:', result);
        
        // Guardar datos del usuario en localStorage o estado global
        localStorage.setItem('userInfo', JSON.stringify(result.usuario));
        
        // Redirigir al usuario a la página principal
        navigate('/home');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      setServerError('No se pudo conectar con el servidor. Verifique su conexión a internet.');
    } finally {
      setIsLoading(false);
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Por favor, ingrese una dirección de correo válida.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('La contraseña debe tener al menos 6 caracteres.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };
  
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        
        <Card variant="outlined">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: 'auto', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Iniciar Sesión
            </Typography>
            <img
              src="https://montenegrodanielfelipe.com/softcial/svg/softcial.svg"
              style={{ width: '100px', height: 'auto' }}
              alt="Softcial Logo"
            />
          </Box>
          
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
              <Typography color="error" align="center">
                {serverError}
              </Typography>
            )}
            
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="tucorreo@gmail.com"
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
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={20} /> : null}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
            
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              ¿Necesitas ayuda?
            </Link>
            
            <ForgotPassword open={open} handleClose={handleClose} />
          </Box>
          
          <Divider />
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log("Login Success");
                console.log(credentialResponse);
                console.log(jwtDecode(credentialResponse.credential));
                navigate("/home");
              }}
              onError={() => console.log("Login Failed")} 
            />
            
            <Typography sx={{ textAlign: 'center' }}>
              ¿No tienes una cuenta?{' '}
              <Link
                href="/sign-up"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Registrate!
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}