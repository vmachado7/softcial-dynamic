import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress, Paper } from '@mui/material';
import { useParams } from 'react-router-dom'; // Necesitaremos esto para obtener el ID de la URL
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from '../AppAppBar.jsx';
import Footer from '../Footer.jsx';
import AppTheme from '../../../shared-theme/AppTheme.jsx';

export default function Report(props) {
  // Obtenemos el ID del reporte de la URL
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
        console.log('Intentando obtener informe con ID:', reportId); // Para debugging

        const response = await fetch(`https://softcial-reports-backend.onrender.com/api/informes/${reportId}`);
        
        // Logging para debugging
        console.log('Status de la respuesta:', response.status);
        console.log('Headers:', Object.fromEntries(response.headers));
        
        if (!response.ok) {
          throw new Error(`Error al obtener el informe (Status: ${response.status})`);
        }

        const data = await response.json();
        console.log('Datos recibidos:', data); // Para debugging

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
          <CircularProgress />
          <Typography variant="body1" sx={{ ml: 2 }}>
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
        <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: '#f8f9fa' }}>
          <Typography variant="h6" color="error" gutterBottom>
            No se pudo cargar el informe
          </Typography>
          <Typography variant="body1" paragraph>
            {error}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Código de error: {error.status}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
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
        <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: '#f8f9fa' }}>
          <Typography variant="h6" gutterBottom>
            No se encontró el informe
          </Typography>
          <Typography variant="body1">
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
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#f8f9fa' }}>
        {/* Identificador del informe */}
        <Typography 
          variant="overline" 
          display="block" 
          align="center"
          sx={{ mb: 2 }}
        >
          Informe #{informe.id}
        </Typography>

        {/* Título del informe */}
        <Box mb={4}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{ 
              color: '#1a237e',
              fontWeight: 'bold',
              borderBottom: '2px solid #1a237e',
              paddingBottom: 2
            }}
          >
            {informe.titulo}
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            align="center" 
            color="text.secondary"
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
              textAlign: 'justify'
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
              textAlign: 'justify'
            }}
          >
            {informe.parrafo2}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};