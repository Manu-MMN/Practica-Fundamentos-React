const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/api/auth/login`,
    me: `${API_BASE_URL}/api/auth/me`,
  },
  adverts: {
    base: `${API_BASE_URL}/api/v1/adverts`,
    detail: (id) => `${API_BASE_URL}/api/v1/adverts/${id}`,
  }
};

export default API_ENDPOINTS; 