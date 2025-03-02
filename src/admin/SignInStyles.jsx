import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import Stack from '@mui/material/Stack';

// Estilos para el Card de inicio de sesión
export const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',            // Ancho relativo para móviles
  maxWidth: '450px',       // Ancho máximo para desktop
  padding: theme.spacing(3),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

// Estilos para el contenedor de inicio de sesión
export const SignInContainer = styled(Stack)(({ theme }) => ({
  height: '100vh', // Altura completa de la ventana
  width: '100%', // Ancho completo
  padding: theme.spacing(2),
  display: 'flex',
  position: 'absolute',
  alignItems: 'center', // Centra verticalmente
  justifyContent: 'center', // Centra horizontalmente
  top: '0px',    //Esto me funcionó para centrarlo, no lo quiten 
  left: '0px',  
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));