import React from 'react';
import { Container, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import AppAppBar from '../AppAppBar.jsx';
import Footer from '../Footer.jsx';
import AppTheme from '../../../shared-theme/AppTheme.jsx';

export default function Report(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <ReportPage />
      </Container>
      <Footer />
    </AppTheme>
  );
}

const ReportPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Influencers y Política: La Nueva Frontera del Activismo Digital
      </Typography>

      <Box mb={4}>
        <Typography variant="body1" paragraph>
          La convergencia entre política y redes sociales ha transformado radicalmente la comunicación política moderna. Los influencers, con su capacidad para generar contenido auténtico y mantener audiencias comprometidas, se han convertido en actores clave en la difusión de mensajes políticos.
          Los datos recientes muestran que el 73% de los jóvenes entre 18-24 años obtienen información política primariamente a través de redes sociales. Esta tendencia ha llevado a los partidos políticos a replantearse sus estrategias de comunicación, destinando hasta un 40% de su presupuesto publicitario a campañas digitales.
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" mb={4}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="https://picsum.photos/800/450?random=15"
            alt="image 1"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Image 1 caption
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box mb={4}>
        <Typography variant="body1" paragraph>

          La efectividad de los influencers en política radica en su autenticidad y conexión directa con sus seguidores. A diferencia de los medios tradicionales, pueden generar debates bidireccionales y adaptar mensajes políticos complejos a formatos más accesibles y entretenidos.
          Sin embargo, esta nueva dinámica presenta desafíos significativos. La desinformación puede propagarse rápidamente, y la polarización política puede intensificarse en las cámaras de eco digitales. Los partidos políticos deben equilibrar la necesidad de alcance con la responsabilidad de mantener un discurso constructivo.
          La tendencia indica que esta simbiosis entre influencers y política continuará fortaleciéndose. Las campañas políticas exitosas del futuro serán aquellas que logren integrar efectivamente el contenido generado por influencers con estrategias tradicionales de comunicación política, manteniendo la autenticidad que caracteriza a las redes sociales mientras transmiten mensajes políticos substantivos.
          La clave está en desarrollar relaciones sostenibles entre políticos e influencers, donde ambas partes mantengan su integridad mientras colaboran en la construcción de un diálogo político más inclusivo y participativo para las nuevas generaciones.
        </Typography>
      </Box>

    </Container>
  );
};
