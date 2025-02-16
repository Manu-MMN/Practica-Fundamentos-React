import React, { useContext } from "react";
import Anuncio from "../components/Anuncio";
import { AnunciosContext } from "../context/AnunciosContext";
import { Link } from "react-router-dom"; // Importa Link

const PaginaAnuncios = () => {
    const { anuncios, eliminarAnuncio, loading } = useContext(AnunciosContext);

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
                    <div key={anuncio.id}> {/* Envuelve cada anuncio en un div con key */}
                        <Link to={`/anuncios/${anuncio.id}`}> {/* Link a la página de detalle */}
                            <Anuncio anuncio={anuncio} eliminarAnuncio={eliminarAnuncio} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaginaAnuncios;