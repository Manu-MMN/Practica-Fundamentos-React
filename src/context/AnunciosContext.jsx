import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnunciosContext = createContext();

export const AnunciosProvider = ({ children }) => {
    const [anuncios, setAnuncios] = useState([]);
    const [loading, setLoading] = useState(true); // Nuevo estado para controlar la carga

    const obtenerAnuncios = async () => {
        try {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            console.log("Token:", token);

            const respuesta = await axios.get("http://localhost:3001/api/v1/adverts", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Respuesta del backend:", respuesta);

            setAnuncios(respuesta.data);
            setLoading(false); // La carga ha terminado

        } catch (error) {
            console.error("Error al obtener los anuncios:", error);
            setLoading(false); // La carga ha terminado, incluso con error
        }
    };

    useEffect(() => {
        obtenerAnuncios();
    }, []);

    useEffect(() => {
        console.log("Estado 'anuncios' actualizado:", anuncios);
    }, [anuncios]);

    const agregarAnuncio = (nuevoAnuncio) => {
        setAnuncios((prevAnuncios) => ([...prevAnuncios, nuevoAnuncio])); // Corrección en agregarAnuncio
    };

    const eliminarAnuncio = (id) => {
        setAnuncios((prevAnuncios) => prevAnuncios.filter((anuncio) => anuncio.id !== id));
    };

    return (
        <AnunciosContext.Provider value={{ anuncios, agregarAnuncio, eliminarAnuncio, loading }}> {/* Pasamos loading al contexto */}
            {children}
        </AnunciosContext.Provider>
    );
};