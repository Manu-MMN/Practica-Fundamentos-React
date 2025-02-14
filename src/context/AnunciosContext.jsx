import React, { createContext, useState } from "react";

// Creamos el contexto
export const AnunciosContext = createContext();

// Creamos el proveedor del contexto
export const AnunciosProvider = ({ children }) => {
  // Estado inicial, el mismo que tenías en App.jsx
  const [anuncios, setAnuncios] = useState([
    { id: 1, titulo: "Anuncio 1", descripcion: "Descripción del anuncio 1", precio: 100 },
    { id: 2, titulo: "Anuncio 2", descripcion: "Descripción del anuncio 2", precio: 200 },
  ]);

  // Función para agregar un anuncio
  const agregarAnuncio = (nuevoAnuncio) => {
    setAnuncios((prevAnuncios) => [...prevAnuncios, nuevoAnuncio]);
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
