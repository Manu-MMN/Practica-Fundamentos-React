import React from "react";
import FormularioAnuncio from "../components/FormularioAnuncio";
import { useNavigate } from "react-router-dom";

const PaginaNuevoAnuncio = () =>{
    const navigate = useNavigate();

    const handleAgregado = () =>{
        navigate("/anuncios")
    };


    return (
    <div>
        <h1>Nuevo anuncio</h1>
        <FormularioAnuncio onAgregado={handleAgregado}/>
    </div>
);
};

export default PaginaNuevoAnuncio