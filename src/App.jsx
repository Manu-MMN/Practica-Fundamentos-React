import React, { useState } from "react";
import Title from "./components/title";
import Button from "./components/Button";
import ListadoAnuncios from "./components/ListadoAnuncios";
import FormularioAnuncio from "./components/FormularioAnuncio";



const App = () => {

    const [anuncios, setAnuncios] = useState([
        { id: 1, titulo: "Anuncio 1", descripcion: "Descripción del anuncio 1", precio: 100 },
        { id: 2, titulo: "Anuncio 2", descripcion: "Descripción del anuncio 2", precio: 200 },
    ]);

        const agregarAnuncio = (nuevoAnuncio) =>{
            setAnuncios((prevAnuncios) =>[...prevAnuncios, nuevoAnuncio]);
        }

        const eliminarAnuncio = (id) => {
            setAnuncios((prevAnuncios)=> prevAnuncios.filter((anuncio) => anuncio.id !== id));
        };

    return (
        <div>
            <Title />
            <Button text={"Click aquí"} />
            <FormularioAnuncio agregarAnuncio={agregarAnuncio} />
            <ListadoAnuncios anuncios={anuncios} eliminarAnuncio={eliminarAnuncio} />
        </div>
    )
}

export default App