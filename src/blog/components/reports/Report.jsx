import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress, Paper, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from '../AppAppBar.jsx';
import Footer from '../Footer.jsx';
import AppTheme from '../../../shared-theme/AppTheme.jsx';

export default function Report(props) {
  const { id } = useParams();
  
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 12, gap: 4 }}
      >
        <ReportPage reportId={id} />
      </Container>
      <Footer />
    </AppTheme>
  );
}

const ReportPage = ({ reportId }) => {
  const [informe, setInforme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInforme = async () => {
      try {
        setLoading(true);
        console.log('Intentando obtener informe con ID:', reportId);

        const response = await fetch(`https://softcial-reports-backend.onrender.com/api/informes/${reportId}`);
        
        console.log('Status de la respuesta:', response.status);
        console.log('Headers:', Object.fromEntries(response.headers));
        
        if (!response.ok) {
          throw new Error(`Error al obtener el informe (Status: ${response.status})`);
        }

        const data = await response.json();
        console.log('Datos recibidos:', data);

        setInforme(data);
        setLoading(false);
      } catch (err) {
        console.error('Error detallado:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (reportId) {
      fetchInforme();
    }
  }, [reportId]);

  // Componente de carga
  if (loading) {
    return (
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress sx={{ color: '#4876EF' }} />
          <Typography variant="body1" sx={{ ml: 2, color: '#B4C0D3' }}>
            Cargando informe...
          </Typography>
        </Box>
      </Container>
    );
  }

  // Manejo de errores
  if (error) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ 
          p: 4, 
          mt: 4, 
          backgroundColor: '#232323', 
          borderRadius: '12px',
          border: '1px solid #323232'
        }}>
          <Typography variant="h6" color="error" gutterBottom>
            No se pudo cargar el informe
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#B4C0D3' }}>
            {error}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Código de error: {error.status}
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#4876EF', 
              '&:hover': { backgroundColor: '#3A67E0' }
            }} 
            onClick={() => window.location.reload()}
          >
            Intentar de nuevo
          </Button>
        </Paper>
      </Container>
    );
  }

  // Si no hay informe
  if (!informe) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ 
          p: 4, 
          mt: 4, 
          backgroundColor: '#232323', 
          borderRadius: '12px',
          border: '1px solid #323232'
        }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#B4C0D3' }}>
            No se encontró el informe
          </Typography>
          <Typography variant="body1" sx={{ color: '#949494' }}>
            El informe solicitado no está disponible en este momento.
          </Typography>
        </Paper>
      </Container>
    );
  }

  // Formateamos la fecha para mostrarla de manera más legible
  const fechaFormateada = new Date(informe.fechaCreacion).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Renderizamos el informe
  return (
    <Container maxWidth="md">
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 5, 
          backgroundColor: '#232323',
          borderRadius: '12px',
          boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.5)',
          border: '1px solid #323232',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Decoración visual */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #4876EF 0%, #00D3AB 100%)'
        }} />
        
        {/* Identificador del informe */}
        <Typography 
          variant="overline" 
          display="block" 
          align="center"
          sx={{ 
            mb: 2, 
            color: '#6B7280',
            letterSpacing: '1.2px'
          }}
        >
          INFORME #{informe.id}
        </Typography>

        {/* Título del informe */}
        <Box mb={4}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{ 
              color: '#4876EF',
              fontWeight: '700',
              borderBottom: '1px solid rgba(72, 118, 239, 0.3)',
              paddingBottom: 2,
              fontFamily: 'Roboto, sans-serif',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' }
            }}
          >
            {informe.titulo}
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            align="center" 
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#949494'
            }}
            gutterBottom
          >
            Publicado el {fechaFormateada}
          </Typography>
        </Box>

        {/* Contenido del informe */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: '1.2rem',
              lineHeight: 1.8,
              textAlign: 'justify',
              color: '#B4C0D3',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            {informe.parrafo1}
          </Typography>
        </Box>

        <Box>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              fontSize: '1.2rem',
              lineHeight: 1.8,
              textAlign: 'justify',
              color: '#B4C0D3',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            {informe.parrafo2}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};