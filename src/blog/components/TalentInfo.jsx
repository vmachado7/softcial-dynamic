import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ForgotPassword({ open, handleClose}) {
    
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
          sx: { backgroundImage: 'none' },
        }}
      >
        <DialogTitle>Cancelar reportes</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
        >
          <DialogContentText>
            ¿Deseas cancelar y borrar este reporte? ¡Esta acción es permanente!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 3, px: 3 }}>
          {}
          <Button
            variant="contained"
            color="none"
            onClick={handleClose}>
            Mejor no.
          </Button>
          <Button
            variant="contained" 
            color="primary"
            onClick={handleClose}>
            Si, Cancelar.
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  

export default ForgotPassword;
