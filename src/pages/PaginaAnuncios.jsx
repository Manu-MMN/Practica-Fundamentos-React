import React, { useContext } from "react";
import ListadoAnuncios from "../components/ListadoAnuncios";
import { AnunciosContext } from "../context/AnunciosContext";
import Anuncio from "../components/Anuncio";


    const PaginaAnuncios = () => {

        const { anuncios, eliminarAnuncio } = useContext(AnunciosContext);

        return (

            <div>
                <h1>Anuncios</h1>
                
                {anuncios.map((anuncio) => (
                    <Anuncio key={anuncio.id} anuncio={anuncio} eliminarAnuncio={eliminarAnuncio} />
                ))}

            </div>
        )
    }

    export default PaginaAnuncios


