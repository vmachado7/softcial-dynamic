const API_URL = 'https://softcial-reports-backend.onrender.com/api';

/**
 * Servicio para gestionar todas las llamadas a la API
 */
export const ApiService = {
  // === INFORMES ===
  
  /**
   * Obtiene todos los informes
   * @returns {Promise<Array>} Lista de informes
   */
  async getInformes() {
    try {
      const response = await fetch(`${API_URL}/informes`);
      if (!response.ok) {
        throw new Error('Error al obtener informes');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en getInformes:', error);
      throw error;
    }
  },

  /**
   * Crea un nuevo informe
   * @param {Object} informe - Datos del informe a crear
   * @returns {Promise<Object>} Informe creado
   */
  async createInforme(informe) {
    try {
      const response = await fetch(`${API_URL}/informes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(informe)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear informe');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en createInforme:', error);
      throw error;
    }
  },

  /**
   * Actualiza un informe existente
   * @param {number} id - ID del informe a actualizar
   * @param {Object} informe - Datos actualizados del informe
   * @returns {Promise<Object>} Informe actualizado
   */
  async updateInforme(id, informe) {
    try {
      const response = await fetch(`${API_URL}/informes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(informe)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar informe');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en updateInforme:', error);
      throw error;
    }
  },

  /**
   * Elimina un informe
   * @param {number} id - ID del informe a eliminar
   * @returns {Promise<void>}
   */
  async deleteInforme(id) {
    try {
      const response = await fetch(`${API_URL}/informes/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al eliminar informe');
      }
    } catch (error) {
      console.error('Error en deleteInforme:', error);
      throw error;
    }
  },

  // === USUARIOS ===
  
  /**
   * Obtiene todos los usuarios
   * @returns {Promise<Array>} Lista de usuarios
   */
  async getUsuarios() {
    try {
      const response = await fetch(`${API_URL}/usuarios`);
      if (!response.ok) {
        throw new Error('Error al obtener usuarios');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en getUsuarios:', error);
      throw error;
    }
  },

  /**
   * Crea un nuevo usuario
   * @param {Object} usuario - Datos del usuario a crear
   * @returns {Promise<Object>} Usuario creado
   */
  async createUsuario(usuario) {
    try {
      const response = await fetch(`${API_URL}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear usuario');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en createUsuario:', error);
      throw error;
    }
  },

  /**
   * Actualiza un usuario existente
   * @param {number} id - ID del usuario a actualizar
   * @param {Object} usuario - Datos actualizados del usuario
   * @returns {Promise<Object>} Usuario actualizado
   */
  async updateUsuario(id, usuario) {
    try {
      const response = await fetch(`${API_URL}/usuarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar usuario');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en updateUsuario:', error);
      throw error;
    }
  },

  /**
   * Elimina un usuario
   * @param {number} id - ID del usuario a eliminar
   * @returns {Promise<void>}
   */
  async deleteUsuario(id) {
    try {
      const response = await fetch(`${API_URL}/usuarios/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al eliminar usuario');
      }
    } catch (error) {
      console.error('Error en deleteUsuario:', error);
      throw error;
    }
  },

  // === ROLES Y ADMINISTRACIÓN ===
  
  /**
   * Asigna un rol a un usuario
   * @param {number} usuarioId - ID del usuario
   * @param {number} rolId - ID del rol a asignar
   * @returns {Promise<Object>} Resultado de la asignación
   */
  async assignRol(usuarioId, rolId) {
    try {
      const response = await fetch(`${API_URL}/usuarios/${usuarioId}/roles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rolId })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al asignar rol');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en assignRol:', error);
      throw error;
    }
  },

  /**
   * Verifica un usuario
   * @param {string} correo - Correo del usuario a verificar
   * @returns {Promise<Object>} Resultado de la verificación
   */
  async verifyUser(correo) {
    try {
      const response = await fetch(`${API_URL}/verify-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo,
          verificado: true
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al verificar usuario');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en verifyUser:', error);
      throw error;
    }
  },

  /**
   * Inicia sesión de administrador
   * @param {string} correo - Correo del administrador
   * @param {string} contraseña - Contraseña del administrador
   * @param {string} adminKey - Código de administrador
   * @returns {Promise<Object>} Datos del administrador autenticado
   */
  async adminLogin(correo, contraseña, adminKey) {
    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo,
          contraseña,
          adminKey
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error de autenticación');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en adminLogin:', error);
      throw error;
    }
  },

  /**
   * Verifica si un usuario es administrador
   * @param {number} userId - ID del usuario a verificar
   * @returns {Promise<Object>} Información del administrador
   */
  async checkAdmin(userId) {
    try {
      const response = await fetch(`${API_URL}/admin/check/${userId}`);
      
      if (!response.ok) {
        throw new Error('Error al verificar permisos de administrador');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en checkAdmin:', error);
      throw error;
    }
  },

  /**
   * Obtiene la lista de administradores
   * @returns {Promise<Array>} Lista de administradores
   */
  async getAdministradores() {
    try {
      const response = await fetch(`${API_URL}/administradores`);
      
      if (!response.ok) {
        throw new Error('Error al obtener administradores');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en getAdministradores:', error);
      throw error;
    }
  },

  // === VERIFICACIÓN ===
  
  /**
   * Guarda un código de verificación
   * @param {string} email - Correo del usuario
   * @param {string} codigo - Código de verificación
   * @returns {Promise<Object>} Resultado del guardado
   */
  async saveVerificationCode(email, codigo) {
    try {
      const response = await fetch(`${API_URL}/save-verification-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, codigo })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al guardar código');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en saveVerificationCode:', error);
      throw error;
    }
  },

  /**
   * Verifica un código
   * @param {string} correo - Correo del usuario
   * @param {string} codigo - Código de verificación
   * @returns {Promise<Object>} Resultado de la verificación
   */
  async verifyCode(correo, codigo) {
    try {
      const response = await fetch(`${API_URL}/verify-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo, codigo })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al verificar código');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en verifyCode:', error);
      throw error;
    }
  }
};

export default ApiService;