import React from "react";
import Anuncio from "./Anuncio";

const ListadoAnuncios = ({ anuncios, eliminarAnuncio }) => {
    return (
        <div className="listado-anuncios">
            {anuncios.map(anuncio => (
                <Anuncio key={anuncio.id} anuncio={anuncio} eliminarAnuncio={eliminarAnuncio} />
            ))}
        </div>
    );
};

export default ListadoAnuncios;
