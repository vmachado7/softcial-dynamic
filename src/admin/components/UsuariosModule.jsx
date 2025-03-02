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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function UsuariosModule({ usuarios, fetchUsuarios, showAlert }) {
  const [openUserDialog, setOpenUserDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userFormData, setUserFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    rolId: 2
  });
  const [loadingAction, setLoadingAction] = useState(false);

  const handleUserDialogOpen = (usuario = null) => {
    if (usuario) {
      setUserFormData({
        nombre: usuario.nombre,
        correo: usuario.correo,
        contraseña: '', // No mostrar la contraseña actual por seguridad
        rolId: usuario.UsuarioRols && usuario.UsuarioRols.length > 0
          ? usuario.UsuarioRols[0].rolId
          : 2
      });
      setCurrentUser(usuario);
    } else {
      setUserFormData({
        nombre: '',
        correo: '',
        contraseña: '',
        rolId: 2
      });
      setCurrentUser(null);
    }
    setOpenUserDialog(true);
  };

  const handleDeleteDialogOpen = (usuario) => {
    setCurrentUser(usuario);
    setOpenDeleteDialog(true);
  };

  const handleDialogClose = () => {
    setOpenUserDialog(false);
    setOpenDeleteDialog(false);
    setCurrentUser(null);
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({
      ...userFormData,
      [name]: value
    });
  };

  const handleUserSubmit = async () => {
    setLoadingAction(true);
    try {
      const url = currentUser 
        ? `https://softcial-reports-backend.onrender.com/api/usuarios/${currentUser.id}`
        : 'https://softcial-reports-backend.onrender.com/api/usuarios';
        
      const method = currentUser ? 'PUT' : 'POST';
      
      // Si estamos actualizando y no se ha cambiado la contraseña, no la enviamos
      const dataToSend = { ...userFormData };
      if (currentUser && !dataToSend.contraseña) {
        delete dataToSend.contraseña;
      }
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });
      
      if (response.ok) {
        showAlert('success', currentUser 
          ? 'Usuario actualizado correctamente' 
          : 'Usuario creado correctamente');
          
        // Si es un nuevo usuario y tiene rol asignado, guardamos el rol
        if (!currentUser) {
          const userData = await response.json();
          if (userData.id) {
            await fetch(`https://softcial-reports-backend.onrender.com/api/usuarios/${userData.id}/roles`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ rolId: userFormData.rolId })
            });
          }
        }
        
        fetchUsuarios();
        handleDialogClose();
      } else {
        const errorData = await response.json();
        showAlert('error', errorData.error || 'Error al procesar el usuario');
      }
    } catch (error) {
      console.error('Error al guardar usuario:', error);
      showAlert('error', 'Error de conexión');
    } finally {
      setLoadingAction(false);
    }
  };

  const handleDelete = async () => {
    if (!currentUser) return;
    
    setLoadingAction(true);
    try {
      const response = await fetch(`https://softcial-reports-backend.onrender.com/api/usuarios/${currentUser.id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        showAlert('success', 'Usuario eliminado correctamente');
        fetchUsuarios();
        handleDialogClose();
      } else {
        const errorData = await response.json();
        showAlert('error', errorData.error || 'Error al eliminar usuario');
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      showAlert('error', 'Error de conexión');
    } finally {
      setLoadingAction(false);
    }
  };

  const handleVerifyUser = async (usuario) => {
    setLoadingAction(true);
    try {
      const response = await fetch('https://softcial-reports-backend.onrender.com/api/verify-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo: usuario.correo,
          verificado: true
        })
      });
      
      if (response.ok) {
        showAlert('success', 'Usuario verificado correctamente');
        fetchUsuarios();
      } else {
        const errorData = await response.json();
        showAlert('error', errorData.error || 'Error al verificar usuario');
      }
    } catch (error) {
      console.error('Error al verificar usuario:', error);
      showAlert('error', 'Error de conexión');
    } finally {
      setLoadingAction(false);
    }
  };

  // Función para obtener el nombre del rol
  const getRoleName = (rolId) => {
    switch (rolId) {
      case 1:
        return 'Administrador';
      case 2:
        return 'Usuario';
      case 3:
        return 'Editor';
      default:
        return 'Usuario';
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">
          Gestión de Usuarios
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={() => handleUserDialogOpen()}
        >
          Nuevo Usuario
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="tabla de usuarios">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">No hay usuarios registrados</TableCell>
              </TableRow>
            ) : (
              usuarios.map((usuario) => {
                const rolId = usuario.UsuarioRols && usuario.UsuarioRols.length > 0
                  ? usuario.UsuarioRols[0].rolId
                  : 2;
                  
                return (
                  <TableRow key={usuario.id}>
                    <TableCell>{usuario.id}</TableCell>
                    <TableCell>{usuario.nombre}</TableCell>
                    <TableCell>{usuario.correo}</TableCell>
                    <TableCell>
                      {usuario.verificado ? (
                        <Chip 
                          label="Verificado" 
                          color="success" 
                          size="small" 
                          icon={<VerifiedUserIcon />}
                        />
                      ) : (
                        <Chip 
                          label="No verificado" 
                          color="warning" 
                          size="small" 
                          onClick={() => handleVerifyUser(usuario)}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={getRoleName(rolId)} 
                        color={rolId === 1 ? "primary" : "default"}
                        size="small" 
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton 
                        color="primary" 
                        onClick={() => handleUserDialogOpen(usuario)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        color="error" 
                        onClick={() => handleDeleteDialogOpen(usuario)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      {!usuario.verificado && (
                        <IconButton 
                          color="success" 
                          onClick={() => handleVerifyUser(usuario)}
                        >
                          <VerifiedUserIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo para crear/editar usuario */}
      <Dialog 
        open={openUserDialog} 
        onClose={handleDialogClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          {currentUser ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="nombre"
            label="Nombre"
            type="text"
            fullWidth
            value={userFormData.nombre}
            onChange={handleUserChange}
            variant="outlined"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            name="correo"
            label="Correo electrónico"
            type="email"
            fullWidth
            value={userFormData.correo}
            onChange={handleUserChange}
            variant="outlined"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            name="contraseña"
            label={currentUser ? "Nueva contraseña (dejar en blanco para mantener la actual)" : "Contraseña"}
            type="password"
            fullWidth
            value={userFormData.contraseña}
            onChange={handleUserChange}
            variant="outlined"
            required={!currentUser}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="role-select-label">Rol</InputLabel>
            <Select
              labelId="role-select-label"
              name="rolId"
              value={userFormData.rolId}
              label="Rol"
              onChange={handleUserChange}
            >
              <MenuItem value={1}>Administrador</MenuItem>
              <MenuItem value={2}>Usuario</MenuItem>
              <MenuItem value={3}>Editor</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancelar</Button>
          <Button 
            onClick={handleUserSubmit} 
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
            ¿Está seguro de que desea eliminar el usuario "{currentUser?.nombre}" ({currentUser?.correo})? Esta acción no se puede deshacer.
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