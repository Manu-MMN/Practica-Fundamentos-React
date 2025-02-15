import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { AuthContext } from "../context/AuthContext";

const Navegacion = () => {
  // Comprobamos si hay un usuario autenticado en el localStorage.
  const { usuario } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/anuncios" activeclassname="activo">
            Anuncios
          </NavLink>
        </li>
        <li>
          <NavLink to="/anuncios/nuevo" activeclassname="activo">
            Nuevo Anuncio
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeclassname="activo">
            Iniciar Sesión
          </NavLink>
        </li>
        {usuario && (
          <li>
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navegacion;
