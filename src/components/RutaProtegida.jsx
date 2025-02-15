import React from "react";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ children }) => {
  // Comprobamos si existe "usuarioLogado" en el localStorage.
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (!usuarioLogado) {
    // Si no está autenticado, redirige a /login
    return <Navigate to="/login" replace />;
  }
  // Si está autenticado, renderiza el contenido de la ruta.
  return children;
};

export default RutaProtegida;
