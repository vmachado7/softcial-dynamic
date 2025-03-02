import * as React from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';

const Card = styled(MuiCard)(({ theme }) => ({
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  width: '100%',
  '&:hover': {
    background:
      'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)',
    borderColor: 'primary.light',
    boxShadow: '0px 2px 8px hsla(0, 0%, 0%, 0.1)',
    ...theme.applyStyles('dark', {
      background:
        'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
      borderColor: 'primary.dark',
      boxShadow: '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
    }),
  },
  [theme.breakpoints.up('md')]: {
    flexGrow: 1,
    maxWidth: `calc(50% - ${theme.spacing(1)})`,
  },
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        borderColor: (theme.vars || theme).palette.primary.light,
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

const PaymentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: 375,
  padding: theme.spacing(3),
  borderRadius: `calc(${theme.shape.borderRadius}px + 4px)`,
  border: '1px solid ',
  borderColor: (theme.vars || theme).palette.divider,
  background:
    'linear-gradient(to bottom right, hsla(220, 35%, 97%, 0.3) 25%, hsla(220, 20%, 88%, 0.3) 100%)',
  boxShadow: '0px 4px 8px hsla(210, 0%, 0%, 0.05)',
  [theme.breakpoints.up('xs')]: {
    height: 300,
  },
  [theme.breakpoints.up('sm')]: {
    height: 350,
  },
  ...theme.applyStyles('dark', {
    background:
      'linear-gradient(to right bottom, hsla(220, 30%, 6%, 0.2) 25%, hsla(220, 20%, 25%, 0.2) 100%)',
    boxShadow: '0px 4px 8px hsl(220, 35%, 0%)',
  }),
}));

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PaymentForm() {
  const [paymentType, setPaymentType] = React.useState('creditCard');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [clientName, setClientName] = React.useState('');

const handlePhoneNumberChange = (event) => {
  const value = event.target.value.replace(/\D/g, ''); // Elimina caracteres no numéricos
  if (value.length <= 10) {
    setPhoneNumber(value);
  }
};
const handleClientNameChange = (event) => {
  const value = event.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); // Permite solo letras y espacios
  setClientName(value);
};

  const handlePaymentClick = () => {
    window.open(
      "https://pasarela-pagos-azure.vercel.app/",
      "_blank"
    );
  };

  return (
    <Stack spacing={{ xs: 3, sm: 0 }} useFlexGap>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="Payment options"
          name="paymentType"
          value={paymentType}
        >
        </RadioGroup>
      </FormControl>
      {paymentType === 'creditCard' && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <PaymentContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">Haga click en el siguiente enlace para completar su pago por Mercado Pago:</Typography>
              <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
              <Box
                component="button"
                onClick={handlePaymentClick}
                sx={{
                  border: "none",
                  background: "none",
                  padding: 0,
                  cursor: "pointer",
                  "& img": { width: "400px", height: "auto" }}}>
                <img src="https://woocommerce.com/wp-content/uploads/2021/05/fb-mercado-pago-v2@2x.png" 
                  alt="Pagar con Mercado Pago" 
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Nombre
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="name"
                  placeholder="Hernando Rodriguez"
                  required
                  size="small"
                  value={clientName}
                  onChange={handleClientNameChange}
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-expiration" required>
                  Numero de Telefono
                </FormLabel>
                <OutlinedInput
                  id="card-expiration"
                  autoComplete="card-expiration"
                  placeholder="3223620938"
                  required
                  size="small"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </FormGrid>
            </Box>
          </PaymentContainer>
          <FormControlLabel
            control={<Checkbox name="saveCard" />}
            label="Recordar mi información."
          />
        </Box>
      )}
    </Stack>
  );
}
