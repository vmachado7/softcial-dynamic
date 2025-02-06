import * as React from 'react';
import { 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box
} from '@mui/material';

function ForgotPassword({ open, handleClose }) {
  // Añadimos un estado para controlar si mostramos el formulario o el mensaje de confirmación
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
    // Cambiamos a la vista de confirmación
    setIsSubmitted(true);
  };

  // Función para cerrar y resetear el diálogo
  const handleDialogClose = () => {
    setIsSubmitted(false); // Reseteamos el estado
    handleClose(); // Cerramos el diálogo
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleDialogClose}
      maxWidth="sm"
      fullWidth
    >
      {!isSubmitted ? (
        // Formulario inicial
        <>
          <DialogTitle>¿Olvidaste tu contraseña?</DialogTitle>
          <DialogContent>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <DialogActions>
                <Button onClick={handleDialogClose}>Cancelar</Button>
                <Button type="submit" variant="contained">
                  Enviar instrucciones
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </>
      ) : (
        // Mensaje de confirmación
        <>
          <DialogTitle>¡Revisa tu correo!</DialogTitle>
          <DialogContent>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              py: 2 
            }}>
              {/* Podríamos añadir un ícono de correo aquí */}
              <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
                Hemos enviado las instrucciones para restablecer tu contraseña.
                Por favor, revisa tu bandeja de entrada y sigue los pasos indicados.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                Si no encuentras el correo, revisa tu carpeta de spam.
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} variant="contained">
              Entendido
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

export default ForgotPassword;