import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Acerca de SoftCial
      </Typography>

      <Box mb={4}>
        <Typography variant="body1" paragraph>
          SoftCial es una consultora especializada que conecta estratégicamente a jóvenes con partidos políticos a través del ecosistema digital de influencers. Reconocemos que las nuevas generaciones se informan principalmente por medios no convencionales, creando una brecha comunicativa que ayudamos a cerrar.        
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Nuestra metodología
        </Typography>
        <Typography variant="body1" paragraph>
          Analizamos y evaluamos comunidades digitales para identificar influencers cuyo contenido resuena orgánicamente con los jóvenes. Realizamos estudios voluntarios sobre sus posturas políticas y medimos el impacto de su contenido. Esta información se traduce en informes detallados que permiten a los representantes políticos comprender mejor cómo conectar efectivamente con el electorado joven.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Servicios
        </Typography>
        <Typography variant="body1" paragraph>
          Ofrecemos dos servicios principales:
        </Typography>
        <Typography variant="body1" paragraph>
          1. Suscripción a informes de análisis de comunidades digitales
        </Typography>
        <Typography variant="body1" paragraph>
          2. Consultoría especializada para planes de acción en campañas políticas
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Propuesta de valor
        </Typography>
        <Typography variant="body1" paragraph>
          Para influencers: Facilitamos la visibilidad de su trabajo ante empleadores del sector político, potenciando su desarrollo profesional.
        </Typography>
        <Typography variant="body1" paragraph>
          Para partidos políticos: Optimizamos el acceso a votantes jóvenes, maximizando el retorno de inversión a través de la financiación del Consejo Nacional Electoral y el Fondo Nacional de Financiación Política.
        </Typography>
        <Typography variant="body1" paragraph>
          Nota: Softsocial actúa exclusivamente como consultora. Cualquier contrato entre representantes políticos e influencers se gestiona de manera independiente a nuestros servicios.
        </Typography>
      </Box>

      {/* Pie de página con enlace a la página principal */}
      <Box textAlign="center" mt={6}>
        <Link href="/home" variant="body2">
          Volver a la página principal
        </Link>
      </Box>

    </Container >
  );
};

export default TermsAndConditions;