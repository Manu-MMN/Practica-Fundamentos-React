import React, { useContext } from "react";
import Anuncio from "../components/Anuncio";
import { AnunciosContext } from "../context/AnunciosContext";

const PaginaAnuncios = () => {
    const { anuncios, eliminarAnuncio, loading } = useContext(AnunciosContext);

    console.log("Loading:", loading);
    console.log("Anuncios en PaginaAnuncios:", anuncios);

    if (loading) {
        return <div>Cargando anuncios...</div>;
    }

    if (anuncios.length === 0 && !loading) {
        return <div>No hay anuncios disponibles.</div>;
    }

    return (
        <div>
            <h1>Anuncios</h1>
            <div>
                {anuncios.map((anuncio) => (
                    <Anuncio key={anuncio.id} anuncio={anuncio} eliminarAnuncio={eliminarAnuncio} /> // Usamos anuncio.id como key
                ))}
            </div>
        </div>
    );
};

export default PaginaAnuncios;