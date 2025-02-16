import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      // Si hay un token, obtener los datos del usuario
      axios.get("http://localhost:3001/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUsuario(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los datos del usuario:", error);
        // Si hay un error, eliminar el token almacenado
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
      });
    }
  }, []);

  const login = async (userData, recordar) => {
    try {
      const responseLogin = await axios.post("http://localhost:3001/api/auth/login", {
        email: userData.email,
        password: userData.password,
      });
      const token = responseLogin.data.accessToken;
      const responseMe = await axios.get("http://localhost:3001/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = responseMe.data;
      setUsuario(user);
      localStorage.setItem("usuarioLogado", JSON.stringify(user));
      console.log(usuario)
      if (recordar) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
      return true;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      return false;
    }
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("usuarioLogado");
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
