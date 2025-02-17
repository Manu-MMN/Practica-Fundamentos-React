import React, { useState, useContext } from "react";
import { AnunciosContext } from "../context/AnunciosContext";

const FormularioAnuncio = ({ onAgregado }) => {
    const { agregarAnuncio } = useContext(AnunciosContext);
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [venta, setVenta] = useState(true);
    const [error, setError] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (titulo && descripcion && precio > 0) {
            const formData = new FormData();
            formData.append("name", titulo);
            formData.append("price", Number(precio));
            formData.append("sale", venta);
            formData.append("tags", JSON.stringify([]));
            console.log("FormData:", formData);
            agregarAnuncio(formData);

            setTitulo("");
            setDescripcion("");
            setPrecio("");
            setVenta(true);
            setError("");
            if (onAgregado) onAgregado();
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
            <select value={venta} onChange={(e) => setVenta(e.target.value === "true")}>
                <option value={true}>Se vende</option>
                <option value={false}>Se compra</option>
            </select>
            <button type="submit">Agregar Anuncio</button>
        </form>
    );
};

export default FormularioAnuncio;