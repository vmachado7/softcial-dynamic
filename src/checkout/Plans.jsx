import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { useNavigate } from 'react-router-dom';

// Styled Card to match the sign-up page design
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));


const PaymentContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  padding: theme.spacing(2),
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  top: '0px',
  left: '0px',
  justifyContent: 'center',
  //padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
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

export default function PaymentPlan(props) {
  const [open, setOpen] = useState(false);

  return (
    <AppTheme {...props}>
      <PaymentContainer direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        
        <StyledCard variant="outlined">
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Tu plan de pagos
          </Typography>

          <CardContent>
            <Typography variant="body1">
              <strong>Plan:</strong> Regular
            </Typography>
            <Typography variant="body1">
              <strong>Precio:</strong> $39.990,00/mensaulmente
            </Typography>
            <Typography variant="body1">
              <strong>Proxima Facturación:</strong> Abril 1, 2025
            </Typography>

            <Button
              variant="contained"
              color="error"
              fullWidth
              sx={{ mt: 3 }}
              onClick={() => setOpen(true)}
            >
              Cancelar Susbscripcion
            </Button>
          </CardContent>
        </StyledCard>

        {/* Confirmation Dialog */}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>¿De verdad quieres cancelar?</DialogTitle>
          <DialogContent>
            <Typography>
              Esta acción cancela tu subscripción, no recibiras reportes una vez termine el mes.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>No, continuar con mi plan actual</Button>
            <Button onClick={useNavigate('/home/User002')} color="error" variant="contained">
              Si, cancela mi subscripción
            </Button>
          </DialogActions>
        </Dialog>
      </PaymentContainer>
    </AppTheme>
  );
}
