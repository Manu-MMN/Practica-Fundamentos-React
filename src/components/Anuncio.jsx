import React from "react";

const Anuncio = ({ anuncio, eliminarAnuncio}) =>{
    return (
        <div className="anuncio">
            <h2>{anuncio.titulo}</h2>
            <p>{anuncio.descripcion}</p>
            <p>Precio: {anuncio.precio} €</p>
            <button onClick={() => eliminarAnuncio(anuncio.id)}>Eliminar Anuncio</button>
        </div>
    );
};

export default Anuncio;