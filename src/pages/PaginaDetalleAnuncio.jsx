import React from "react";
import {useParams} from "react-router-dom";

//useParams sirve para obtener los parámetros de la URL del componente por ejmplo el id del anuncio


const PaginaDetalleAnuncio = () =>{
    const {id} = useParams();

    return (
        <div>
            <h1>Detalle del Anuncio</h1>
            <p>El id del anuncio es: {id}</p>
            {/* Aquí se mostrarán los detalles completos del anuncio */}
        </div>
    )
}

export default PaginaDetalleAnuncio