import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar la información de autenticación del localStorage
    localStorage.removeItem("usuarioLogado");
    // Redirigir al usuario a la página de login
    navigate("/login", { replace: true });
  };

  return (
    <button onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
