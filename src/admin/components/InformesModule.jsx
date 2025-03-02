import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function InformesModule({ informes, fetchInformes, showAlert }) {
  const [openInformeDialog, setOpenInformeDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentInforme, setCurrentInforme] = useState(null);
  const [informeFormData, setInformeFormData] = useState({
    titulo: '',
    parrafo1: '',
    parrafo2: ''
  });
  const [loadingAction, setLoadingAction] = useState(false);

  const handleInformeDialogOpen = (informe = null) => {
    if (informe) {
      setInformeFormData({
        titulo: informe.titulo,
        parrafo1: informe.parrafo1,
        parrafo2: informe.parrafo2
      });
      setCurrentInforme(informe);
    } else {
      setInformeFormData({
        titulo: '',
        parrafo1: '',
        parrafo2: ''
      });
      setCurrentInforme(null);
    }
    setOpenInformeDialog(true);
  };

  const handleDeleteDialogOpen = (informe) => {
    setCurrentInforme(informe);
    setOpenDeleteDialog(true);
  };

  const handleDialogClose = () => {
    setOpenInformeDialog(false);
    setOpenDeleteDialog(false);
    setCurrentInforme(null);
  };

  const handleInformeChange = (e) => {
    const { name, value } = e.target;
    setInformeFormData({
      ...informeFormData,
      [name]: value
    });
  };

  const handleInformeSubmit = async () => {
    setLoadingAction(true);
    try {
      const url = currentInforme 
        ? `https://softcial-reports-backend.onrender.com/api/informes/${currentInforme.id}`
        : 'https://softcial-reports-backend.onrender.com/api/informes';
        
      const method = currentInforme ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(informeFormData)
      });
      
      if (response.ok) {
        showAlert('success', currentInforme 
          ? 'Informe actualizado correctamente' 
          : 'Informe creado correctamente');
        fetchInformes();
        handleDialogClose();
      } else {
        const errorData = await response.json();
        showAlert('error', errorData.error || 'Error al procesar el informe');
      }
    } catch (error) {
      console.error('Error al guardar informe:', error);
      showAlert('error', 'Error de conexión');
    } finally {
      setLoadingAction(false);
    }
  };

  const handleDelete = async () => {
    if (!currentInforme) return;
    
    setLoadingAction(true);
    try {
      const response = await fetch(`https://softcial-reports-endpoint.onrender.com/api/informes/${currentInforme.id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        showAlert('success', 'Informe eliminado correctamente');
        fetchInformes();
        handleDialogClose();
      } else {
        const errorData = await response.json();
        showAlert('error', errorData.error || 'Error al eliminar informe');
      }
    } catch (error) {
      console.error('Error al eliminar informe:', error);
      showAlert('error', 'Error de conexión');
    } finally {
      setLoadingAction(false);
    }
  };

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">
          Gestión de Informes
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={() => handleInformeDialogOpen()}
        >
          Nuevo Informe
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="tabla de informes">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Fecha de Creación</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {informes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">No hay informes registrados</TableCell>
              </TableRow>
            ) : (
              informes.map((informe) => (
                <TableRow key={informe.id}>
                  <TableCell>{informe.id}</TableCell>
                  <TableCell>{informe.titulo}</TableCell>
                  <TableCell>{formatDate(informe.fechaCreacion)}</TableCell>
                  <TableCell>
                    <IconButton 
                      color="primary" 
                      onClick={() => handleInformeDialogOpen(informe)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      color="error" 
                      onClick={() => handleDeleteDialogOpen(informe)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo para crear/editar informe */}
      <Dialog 
        open={openInformeDialog} 
        onClose={handleDialogClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          {currentInforme ? 'Editar Informe' : 'Crear Nuevo Informe'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="titulo"
            label="Título"
            type="text"
            fullWidth
            value={informeFormData.titulo}
            onChange={handleInformeChange}
            variant="outlined"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            name="parrafo1"
            label="Primer Párrafo"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={informeFormData.parrafo1}
            onChange={handleInformeChange}
            variant="outlined"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            name="parrafo2"
            label="Segundo Párrafo"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={informeFormData.parrafo2}
            onChange={handleInformeChange}
            variant="outlined"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancelar</Button>
          <Button 
            onClick={handleInformeSubmit} 
            variant="contained"
            disabled={loadingAction}
            startIcon={loadingAction ? <CircularProgress size={20} /> : null}
          >
            {loadingAction ? 'Guardando...' : 'Guardar'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Diálogo de confirmación para eliminar */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleDialogClose}
      >
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro de que desea eliminar el informe "{currentInforme?.titulo}"? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancelar</Button>
          <Button 
            onClick={handleDelete} 
            color="error"
            disabled={loadingAction}
            startIcon={loadingAction ? <CircularProgress size={20} /> : null}
          >
            {loadingAction ? 'Eliminando...' : 'Eliminar'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}