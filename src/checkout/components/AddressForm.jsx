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
        <FormLabel htmlFor="address1" required>Tendencia #1</FormLabel>
        <OutlinedInput
          id="address1"
          placeholder="Precio del gas natural"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address2">Tendencia #2</FormLabel>
        <OutlinedInput
          id="address2"
          placeholder="Precio del Oro"
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address2">Tendencia #3</FormLabel>
        <OutlinedInput
          id="address2"
          placeholder="Precio de las esmeraldas"
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address2">Tendencia #4</FormLabel>
        <OutlinedInput
          id="address2"
          placeholder="Opinion del ministerio de defensa"
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address2">Tendencia #5</FormLabel>
        <OutlinedInput
          id="address2"
          placeholder="Stock de Space X"
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          Pais
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="country"
          placeholder="Colombia"
          autoComplete="shipping country"
          required
          size="small"
        />
      </FormGrid>
    </Grid>
  );
}
