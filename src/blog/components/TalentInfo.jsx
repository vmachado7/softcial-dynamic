import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';

function ForgotPassword({ open, handleClose, handleTalent}) {
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
        <DialogTitle>{handleTalent}</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
        >
          <DialogContentText>
            Descripción del talento, incluir leanings y demográficas.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 3, px: 3 }}>
          {}
          <Button
            variant="contained" 
            color="primary"
            onClick={handleClose} 
          >
            X
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  

export default ForgotPassword;
