import React, { createContext, useState, useCallback } from "react";
import axios from "axios";
import { API_ENDPOINTS } from '../config/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = useCallback(async (credentials, remember) => {
    try {
      const response = await axios.post(API_ENDPOINTS.auth.login, credentials);
      const newToken = response.data.accessToken;
      
      setToken(newToken);
      setIsAuthenticated(true);
      
      if (remember) {
        localStorage.setItem('authToken', newToken);
      }
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
  }, []);

  const getAuthorizationHeader = useCallback(() => {
    return token ? `Bearer ${token}` : '';
  }, [token]);

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      login, 
      logout,
      getAuthorizationHeader
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
