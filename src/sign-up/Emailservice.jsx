/* import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAIL_CONFIG = {
    PUBLIC_KEY: "tu_clave_publica_aqui",
    SERVICE_ID: "tu_service_id_aqui",
    TEMPLATE_ID: "tu_template_id_aqui"
};

export const initEmailService = () => {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
};

export const sendConfirmationEmail = async (userData) => {
    try {
        const templateParams = {
            to_name: userData.name,
            to_email: userData.email,
        };

        await emailjs.send(
            EMAIL_CONFIG.SERVICE_ID,
            EMAIL_CONFIG.TEMPLATE_ID,
            templateParams
        );

        return true;
    } catch (error) {
        console.error('Error al enviar email de confirmación:', error);
        return false;
    }
};
*/

fetch('https://tu-api.onrender.com/api/send-welcome-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: 'Nombre del Usuario',
      email: 'usuario@ejemplo.com'
    })
  })
  .then(response => response.json())
  .then(data => console.log('Respuesta:', data))
  .catch(error => console.error('Error:', error));