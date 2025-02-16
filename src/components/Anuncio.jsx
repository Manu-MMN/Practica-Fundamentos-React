import React from "react";

const Anuncio = ({ anuncio, eliminarAnuncio}) =>{
    return (
        <div className="anuncio">
            <h2>{anuncio.name}</h2>
            <p>{anuncio.description}</p>
            <p>Precio: {anuncio.price} €</p>
            <button onClick={() => eliminarAnuncio(anuncio.id)}>Eliminar Anuncio</button>
        </div>
    );
};

export default Anuncio;