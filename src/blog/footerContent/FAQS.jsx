import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md">
      {/* Título principal */}
      <Typography variant="h4" align="center" gutterBottom>
        Política de Privacidad
      </Typography>

      {/* Sección de introducción */}
      <Box mb={4}>
        <Typography variant="body1" paragraph>
          En SoftCial, respetamos y protegemos la privacidad de nuestros usuarios. Esta Política de Privacidad explica cómo recolectamos, utilizamos, compartimos y protegemos su información personal conforme a la Ley Estatutaria 1581 de 2012 sobre la protección de datos personales en Colombia.
        </Typography>
      </Box>

      {/* Sección de uso del sitio web */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          1. Recolección de Información Personal
        </Typography>
        <Typography variant="body1" paragraph>
          Recolectamos información personal cuando usted se registra en nuestra plataforma, utiliza nuestros servicios o interactúa con nosotros. Esta información puede incluir:

          - Nombre completo, correo electrónico, teléfono y dirección.
          - Información sensible, como orientación política, con su consentimiento expreso.
          - Datos relacionados con el uso de la plataforma, como preferencias y actividades.
        </Typography>
      </Box>

      {/* Sección de propiedad intelectual */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          2. Uso de la Información
        </Typography>
        <Typography variant="body1" paragraph>
          Utilizamos su información personal para:

          - Proveer y mejorar nuestros servicios.
          - Personalizar su experiencia en la plataforma.
          - Generar informes y análisis relacionados con la participación política juvenil.
          - Comunicarnos con usted sobre actualizaciones, eventos y otras noticias relevantes.
        </Typography>
      </Box>

      {/* Sección de limitación de responsabilidad */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          3. Tratamiento de Datos Sensibles
        </Typography>
        <Typography variant="body1" paragraph>
          - La recolección y tratamiento de datos sensibles, como su orientación política, se realizará exclusivamente con su autorización previa, expresa y escrita.
          - Usted podrá decidir libremente si desea compartir esta información, y podrá revocar su consentimiento en cualquier momento.        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          4. Tratamiento de Datos Personales
        </Typography>
        <Typography variant="body1" paragraph>
          De conformidad con la Ley Estatutaria 1581 de 2012, el tratamiento de los datos personales de los usuarios se regirá por las siguientes condiciones:
        </Typography>
      </Box>

      {/* Sección de modificaciones a los términos */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          5. Derechos de los Titulares de Datos
        </Typography>
        <Typography variant="body1" paragraph>
          De conformidad con la Ley 1581 de 2012, usted tiene los siguientes derechos:

          - Conocer, actualizar y rectificar su información personal.
          - Solicitar la eliminación de sus datos cuando considere que su tratamiento no cumple con los principios establecidos en la ley.
          - Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.
          - Presentar quejas ante la Superintendencia de Industria y Comercio por el incumplimiento de las normas de protección de datos.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          6. Seguridad de la Información
        </Typography>
        <Typography variant="body1" paragraph>
          Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su información personal contra el acceso no autorizado, la pérdida, la alteración y el uso indebido. Estas medidas incluyen:

          - Encriptación de datos.
          - Control de acceso estricto.
          - Auditorías regulares de nuestros sistemas.
        </Typography>
      </Box>

      {/* Pie de página con enlace a la página principal */}
      <Box textAlign="center" mt={6}>
        <Link href="/home" variant="body2">
          Volver a la página principal
        </Link>
      </Box>

    </Container>
  );
};

export default TermsAndConditions;