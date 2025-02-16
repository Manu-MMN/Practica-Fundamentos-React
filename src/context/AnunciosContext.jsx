import React, { createContext, useState } from "react";
import axios from "axios"
import { use } from "react";

// Creamos el contexto
export const AnunciosContext = createContext();

// Creamos el proveedor del contexto
export const AnunciosProvider = ({ children }) => {
  // Estado inicial, el mismo que tenías en App.jsx
  const [anuncios, setAnuncios] = useState([
    { id: 1, titulo: "Anuncio 1", descripcion: "Descripción del anuncio 1", precio: 100 },
    { id: 2, titulo: "Anuncio 2", descripcion: "Descripción del anuncio 2", precio: 200 },
  ]);
  const obtenerAnuncios = async () => {
    try {
      const token = localStorage.getItem("token")|| sessionStorage.getItem("token");
      const respuesta = await axios.get("http://localhost:3001/api/v1/adverts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAnuncios(respuesta.data);
    } catch (error) {
      console.error("Error al obtener los anuncios:", error);
    }
    useEffect(() => {
      obtenerAnuncios();
    }, []);
  }

  // Función para agregar un anuncio
  const agregarAnuncio = (nuevoAnuncio) => {
    setAnuncios((prevAnuncios) => {
        const nuevosAnuncios = [...prevAnuncios, nuevoAnuncio];
        console.log("Anuncios actualizados:", nuevosAnuncios);
        return nuevosAnuncios;
    });
};
  // Función para eliminar un anuncio
  const eliminarAnuncio = (id) => {
    setAnuncios((prevAnuncios) => prevAnuncios.filter((anuncio) => anuncio.id !== id));
  };

  return (
    <AnunciosContext.Provider value={{ anuncios, agregarAnuncio, eliminarAnuncio }}>
      {children}
    </AnunciosContext.Provider>
  );
};
