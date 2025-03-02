import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1" required>
          Mi reporte de tendencia 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Lockheed Martin"
          autoComplete="shipping address-line1"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1">
          Mi reporte de tendencia 2
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Lockheed Martin"
          autoComplete="shipping address-line1"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1">
          Mi reporte de tendencia 3
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Lockheed Martin"
          autoComplete="shipping address-line1"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1">
          Mi reporte de tendencia 4
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Lockheed Martin"
          autoComplete="shipping address-line1"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1">
          Mi reporte de tendencia 5
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Lockheed Martin"
          autoComplete="shipping address-line1"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="Recibir notificaciones por correo cuando todos los informes se encuentren listos."
        />
      </FormGrid>
    </Grid>
  );
}
