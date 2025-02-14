import React from "react";
import ListadoAnuncios from "../components/ListadoAnuncios";


    const PaginaAnuncios = () => {
        return (

            <div>
                <h1>Anuncios</h1>
                
                {/* incluir filtros */}

                <ListadoAnuncios />
            </div>
        )
    }

    export default PaginaAnuncios


