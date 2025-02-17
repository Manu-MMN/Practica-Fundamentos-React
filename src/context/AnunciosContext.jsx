import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnunciosContext = createContext();

export const AnunciosProvider = ({ children }) => {
    const [anuncios, setAnuncios] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);

        } catch (error) {
            console.error("Error al obtener los anuncios:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerAnuncios();
    }, []);

    useEffect(() => {
        console.log("Estado 'anuncios' actualizado:", anuncios);
    }, [anuncios]);

    const agregarAnuncio = async (nuevoAnuncio) => {
        try {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            const respuesta = await axios.post("http://localhost:3001/api/v1/adverts", nuevoAnuncio, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Anuncio creado en el backend:", respuesta.data);
            setAnuncios((prevAnuncios) => [...prevAnuncios, respuesta.data]);
        } catch (error) {
            console.error("error al crear el anuncio:", error);
            console.log("Respuesta completa:", error.response)
        }
    };

    const eliminarAnuncio = async (borrarAnuncio) => {
      try {
          const token = localStorage.getItem("token") || sessionStorage.getItem("token");
          const respuesta = await axios.delete(`http://localhost:3001/api/v1/adverts/${borrarAnuncio}`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
  
          // Actualizar el estado anuncios después de la petición DELETE para no tener que recargar la página para ver el resultado
          setAnuncios((prevAnuncios) => prevAnuncios.filter((anuncio) => anuncio.id !== borrarAnuncio));
  
          console.log("Anuncio eliminado del backend:", respuesta.data); 
      } catch (error) {
          console.error("Error al eliminar el anuncio:", error);
          console.log("Respuesta completa:", error.response); 
      }
  };

    return (
        <AnunciosContext.Provider value={{ anuncios, agregarAnuncio, eliminarAnuncio, loading }}>
            {children}
        </AnunciosContext.Provider>
    );
};

export default AnunciosProvider;