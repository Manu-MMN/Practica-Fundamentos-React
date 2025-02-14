import React from "react";
import { NavLink } from "react-router-dom";

const Navegacion = () => {
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
                    Iniciar sesión
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navegacion