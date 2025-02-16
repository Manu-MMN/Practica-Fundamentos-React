import React from "react";
import { useParams } from "react-router-dom";

const PaginaDetalleAnuncio = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Detalle del Anuncio</h1>
            <p>ID del anuncio: {id}</p>
            {/* Aquí se mostrarán los detalles completos del anuncio */}
        </div>
    );
};

export default PaginaDetalleAnuncio;