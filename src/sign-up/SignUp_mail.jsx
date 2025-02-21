import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { useFormValidation } from './Useformvalidation';
// import { initEmailService, sendConfirmationEmail } from './Emailservice';
import { Card, SignUpContainer } from './Styles';
import { SignUpForm } from './Signupform';

export default function SignUp(props) {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const formValidation = useFormValidation();
/*
    useEffect(() => {
        initEmailService();
    }, []);
*/
const handleSubmit = async (event) => {
    event.preventDefault();

    // Primero validamos el formulario como ya lo estabas haciendo
    if (!formValidation.validateInputs()) {
        return;
    }

    setIsSubmitting(true);

    // Obtenemos los datos del formulario
    const formData = new FormData(event.currentTarget);
    const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    };

    try {
        // Primero intentamos enviar el correo de bienvenida
        const emailResponse = await fetch('https://softcial-email-endpoint.onrender.com/api/send-welcome-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: userData.name,  // Usamos el nombre del formulario
                email: userData.email   // Usamos el email del formulario
            })
        });

        // Verificamos si el envío del correo fue exitoso
        const emailResult = await emailResponse.json();

        if (emailResult.success) {
            // Si el correo se envió exitosamente, procedemos con el resto del registro
            const emailSent = await sendConfirmationEmail(userData);

            if (emailSent) {
                console.log('Usuario registrado y emails enviados:', userData);
                // Mostramos un mensaje más completo al usuario
                alert(
                    '¡Registro exitoso! Te hemos enviado dos correos:\n' +
                    '1. Un correo de bienvenida\n' +
                    '2. Un correo de confirmación de cuenta\n\n' +
                    'Por favor, revisa tu bandeja de entrada para completar el proceso.'
                );
                navigate('/sign-in');
            } else {
                alert('Se envió el correo de bienvenida pero hubo un problema con el correo de confirmación. Por favor, contacta con soporte.');
            }
        } else {
            throw new Error('Error al enviar el correo de bienvenida');
        }
    } catch (error) {
        console.error('Error en el proceso de registro:', error);
        
        // Proporcionamos un mensaje de error más específico
        alert(
            'Ocurrió un error durante el registro:\n' +
            (error.message || 'Por favor, intenta nuevamente o contacta con soporte si el problema persiste.')
        );
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <SignUpContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
                <Card variant="outlined">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography
                            component="h1"
                            variant="h4"
                            sx={{ width: 'auto', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                        >
                            Registráte
                        </Typography>
                        <img
                            src="https://montenegrodanielfelipe.com/softcial/svg/softcial.svg"
                            style={{ width: '100px', height: 'auto' }}
                            alt="Softcial Logo"
                        />
                    </Box>
                    <SignUpForm
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        validateInputs={formValidation.validateInputs}
                        formErrors={{
                            nameError: formValidation.nameError,
                            nameErrorMessage: formValidation.nameErrorMessage,
                            emailError: formValidation.emailError,
                            emailErrorMessage: formValidation.emailErrorMessage,
                            passwordError: formValidation.passwordError,
                            passwordErrorMessage: formValidation.passwordErrorMessage,
                        }}
                    />
                    <Divider />
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log("Login Success")
                                console.log(credentialResponse)
                                console.log(jwtDecode(credentialResponse.credential))
                                navigate("/home")
                            }}
                            onError={() => console.log("Login Failed")}
                        />
                        <Typography sx={{ textAlign: 'center' }}>
                            ¿Ya tienes una cuenta?{' '}
                            <Link
                                href="/sign-in"
                                variant="body2"
                                sx={{ alignSelf: 'center' }}
                            >
                                Inicia Sesión
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </SignUpContainer>
        </AppTheme>
    );
}