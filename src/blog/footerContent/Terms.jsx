import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const TermsAndConditions = () => {
    return (
        <Container maxWidth="md">
            {/* Título principal */}
            <Typography variant="h4" align="center" gutterBottom>
                Términos y Condiciones
            </Typography>

            {/* Sección de introducción */}
            <Box mb={4}>
                <Typography variant="body1" paragraph>
                    Bienvenido/a a SoftCial. Al acceder y utilizar nuestros servicios, usted acepta los presentes Términos y Condiciones ("Términos"). Si no está de acuerdo con alguno de estos términos, no deberá utilizar nuestra plataforma.        </Typography>
            </Box>

            {/* Sección de uso del sitio web */}
            <Box mb={4}>
                <Typography variant="h6" gutterBottom>
                    1. Uso del Sitio Web
                </Typography>
                <Typography variant="body1" paragraph>
                    Este sitio web es proporcionado para tu uso personal y no comercial. Puedes navegar y ver el contenido del sitio de acuerdo con estos términos y condiciones. No puedes modificar, copiar, distribuir, transmitir, mostrar, reproducir, publicar, licenciar, crear trabajos derivados, transferir o vender cualquier información, software, productos o servicios obtenidos de este sitio.
                </Typography>
            </Box>

            {/* Sección de propiedad intelectual */}
            <Box mb={4}>
                <Typography variant="h6" gutterBottom>
                    2. Propiedad Intelectual
                </Typography>
                <Typography variant="body1" paragraph>
                    Todo el contenido presente en este sitio web, incluyendo pero no limitado a texto, gráficos, logotipos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de [Nombre de la Compañía] o de sus proveedores de contenido y está protegido por las leyes internacionales de derechos de autor.
                </Typography>
            </Box>

            {/* Sección de limitación de responsabilidad */}
            <Box mb={4}>
                <Typography variant="h6" gutterBottom>
                    3. Limitación de Responsabilidad
                </Typography>
                <Typography variant="body1" paragraph>
                    En ningún caso SoftCial será responsable por cualquier daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de este sitio web o de cualquier otro sitio web vinculado a este sitio.
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h6" gutterBottom>
                    4. Tratamiento de Datos Personales
                </Typography>
                <Typography variant="body1" paragraph>
                    De conformidad con la Ley Estatutaria 1581 de 2012, el tratamiento de los datos personales de los usuarios se regirá por las siguientes condiciones:
                </Typography>
            </Box>
            <Box mb={4}>
                <Typography variant="h8" gutterBottom>
                    4.1 Datos Sensibles:
                </Typography>
                <Typography variant="body1" paragraph>
                    Los usuarios podrán decidir libremente si divulgan información sensible, como su orientación política. Esta información solo será recolectada y tratada con autorización previa, expresa y escrita del titular.
                </Typography>
            </Box>
            <Box mb={4}>
                <Typography variant="h8" gutterBottom>
                    4.2 Finalidad del Tratamiento:
                </Typography>
                <Typography variant="body1" paragraph>
                    Los datos serán utilizados para:
                    - Catalogar a los usuarios como potenciales líderes políticos.
                    - Generar informes imparciales relacionados con la participación política.
                    - Divulgar información sobre eventos y capacitaciones.
                </Typography>
            </Box>
            <Box mb={4}>
                <Typography variant="h8" gutterBottom>
                    4.3 Derechos de los Titulares:
                </Typography>
                <Typography variant="body1" paragraph>
                    Los usuarios tienen derecho a acceder, actualizar, rectificar y solicitar la eliminación de sus datos en cualquier momento. Además, pueden revocar su consentimiento para el tratamiento de los mismos.
                </Typography>
            </Box>

            {/* Sección de modificaciones a los términos */}
            <Box mb={4}>
                <Typography variant="h6" gutterBottom>
                    5. Modificaciones a los Términos y Condiciones
                </Typography>
                <Typography variant="body1" paragraph>
                    SoftCial reservama el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán notificadas a los usuarios a través de la plataforma o por correo electrónico.        </Typography>
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