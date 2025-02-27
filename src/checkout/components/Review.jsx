import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Nombre:', detail: 'Hernando Rodriguez' },
  { name: 'Numero:', detail: '3223620938' },
  { name: 'Metodo de Pago:', detail: 'MercadoPago' },
];

export default function Review() {
  return (
    <Stack spacing={2}>
      <List disablePadding>
      <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Plan de Subscripción seleccionado" secondary="Renovación mensual." />
          <Typography variant="body2">$30.925</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="IVA" secondary="" />
          <Typography variant="body2">$5.875</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $36.800
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Detalles del Usuario
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
