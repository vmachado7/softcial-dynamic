import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Componentes MUI
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuIcon from '@mui/icons-material/Menu';

// Componentes personalizados
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { NavigationDrawer } from './components/NavigationDrawer';
import { TabPanel } from './components/DashboardComponents';
import { DashboardTab } from './components/DashboardComponents';
import { InformesModule } from './components/InformesModule';
import { UsuariosModule } from './components/UsuariosModule';

// Servicios
import ApiService from './services/ApiService';

// Definición del ancho del drawer
const drawerWidth = 240;

export default function AdminDashboard(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [informes, setInformes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [alertInfo, setAlertInfo] = useState({ show: false, type: 'info', message: '' });
  
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario es administrador
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      navigate('/admin');
      return;
    }
    
    const parsedUser = JSON.parse(userInfo);
    if (!parsedUser.isAdmin) {
      navigate('/sign-in');
      return;
    }
    
    setUser(parsedUser);
    setLoading(false);
    
    // Cargar datos iniciales
    fetchInformes();
    fetchUsuarios();
  }, [navigate]);

  const fetchInformes = async () => {
    try {
      const data = await ApiService.getInformes();
      setInformes(data);
    } catch (error) {
      showAlert('error', 'Error al cargar los informes');
    }
  };

  const fetchUsuarios = async () => {
    try {
      const data = await ApiService.getUsuarios();
      setUsuarios(data);
    } catch (error) {
      showAlert('error', 'Error al cargar los usuarios');
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/admin');
  };

  const showAlert = (type, message) => {
    setAlertInfo({
      show: true,
      type,
      message
    });
    
    setTimeout(() => {
      setAlertInfo({ show: false, type: 'info', message: '' });
    }, 5000);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <AppTheme {...props}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              {activeTab === 0 && "Dashboard"}
              {activeTab === 1 && "Gestión de Informes"}
              {activeTab === 2 && "Gestión de Usuarios"}
            </Typography>
            <Typography variant="body2" sx={{ mr: 2 }}>
              {user?.nombre || 'Administrador'}
            </Typography>
            <ColorModeSelect />
          </Toolbar>
        </AppBar>
        
        <NavigationDrawer 
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleLogout={handleLogout}
        />
        
        <Box
          component="main"
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            mt: 8
          }}
        >
          {alertInfo.show && (
            <Alert 
              severity={alertInfo.type}
              sx={{ mb: 2 }}
            >
              {alertInfo.message}
            </Alert>
          )}

          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            sx={{ 
              borderBottom: 1, 
              borderColor: 'divider',
              display: { xs: 'flex', sm: 'none' }
            }}
          >
            <Tab label="Dashboard" />
            <Tab label="Informes" />
            <Tab label="Usuarios" />
          </Tabs>

          <TabPanel value={activeTab} index={0}>
            <DashboardTab 
              informes={informes} 
              usuarios={usuarios} 
            />
          </TabPanel>
          
          <TabPanel value={activeTab} index={1}>
            <InformesModule 
              informes={informes} 
              fetchInformes={fetchInformes} 
              showAlert={showAlert} 
            />
          </TabPanel>
          
          <TabPanel value={activeTab} index={2}>
            <UsuariosModule 
              usuarios={usuarios} 
              fetchUsuarios={fetchUsuarios} 
              showAlert={showAlert} 
            />
          </TabPanel>
        </Box>
      </Box>
    </AppTheme>
  );
}