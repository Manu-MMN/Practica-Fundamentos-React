import React, { useContext } from "react";
import Anuncio from "./Anuncio";
import { AnunciosContext } from "../context/AnunciosContext";

const ListadoAnuncios = () => {
const { anuncios, eliminarAnuncio } = useContext(AnunciosContext);

return (
    <div>
    {anuncios.map((anuncio) => (
        <Anuncio key={anuncio.id} anuncio={anuncio} eliminarAnuncio={eliminarAnuncio} />
    ))}
    </div>
);
};

export default ListadoAnuncios;
