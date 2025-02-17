import React, { useContext, useState } from "react";
import Anuncio from "../components/Anuncio";
import { AnunciosContext } from "../context/AnunciosContext";

const PaginaAnuncios = () => {
    const { anuncios, eliminarAnuncio, loading } = useContext(AnunciosContext);
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");

    const anunciosFiltrados = anuncios.filter((anuncio) => {
        const nombreCoincide = anuncio.name.toLowerCase().includes(nombre.toLowerCase());
        const tipoCoincide = tipo === "" || anuncio.sale.toString() === tipo;
        return nombreCoincide && tipoCoincide;
    });

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
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="true">Se vende</option>
                    <option value="false">Se compra</option>
                </select>

                {anunciosFiltrados.map((anuncio) => (
                    <Anuncio key={anuncio.id} anuncio={anuncio} eliminarAnuncio={eliminarAnuncio} />
                ))}
            </div>
        </div>
    );
};

export default PaginaAnuncios;