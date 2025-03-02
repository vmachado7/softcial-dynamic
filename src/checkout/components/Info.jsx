import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const products = [
  /*Comentario para encontrar sectores de tensión rapido*/
  {
    name: 'Plan de 5 reportes de tendencia generados a diario por 1 mes.',
    desc: 'Se renovara el primer dia de cada mes.',
    price:'$33.605',
  },
  {
    name: 'Plan de Apoyo por 1 mes',
    desc: 'Incluido en la compra',
    price:'Gratis',
  },
];

function Info({ totalPrice }) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default Info;
