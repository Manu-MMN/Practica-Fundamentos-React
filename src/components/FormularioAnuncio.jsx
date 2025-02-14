import React, { useState, useContext } from "react";
import { AnunciosContext } from "../context/AnunciosContext";

const FormularioAnuncio = () => {
  const { agregarAnuncio } = useContext(AnunciosContext);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (titulo && descripcion && precio > 0) {
      agregarAnuncio({ id: Date.now(), titulo, descripcion, precio: Number(precio) });
      setTitulo("");
      setDescripcion("");
      setPrecio("");
      setError("");
    } else {
      setError("Por favor, completa todos los campos con datos válidos.");
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <button type="submit">Agregar Anuncio</button>
    </form>
  );
};

export default FormularioAnuncio;
