// Crear un nuevo informe
async function crearInforme() {
    try {
        const response = await fetch('https://softcial-reports-backend.onrender.com/api/informes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo: "Mi Primer Informe",
                parrafo1: "Este es el primer párrafo de prueba",
                parrafo2: "Este es el segundo párrafo de prueba"
            })
        });
        
        const resultado = await response.json();
        console.log('Informe creado:', resultado);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Obtener todos los informes
async function obtenerInformes() {
    try {
        const response = await fetch('https://softcial-reports-backend.onrender.com/api/informes');
        const informes = await response.json();
        console.log('Informes obtenidos:', informes);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function eliminarTodosLosInformes() {
    try {
      const response = await fetch('https://softcial-reports-backend.onrender.com/api/informes', {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar los informes');
      }
  
      const resultado = await response.json();
      console.log('Resultado:', resultado.mensaje);
      return resultado;
    } catch (error) {
      console.error('Error:', error);
    }
  }