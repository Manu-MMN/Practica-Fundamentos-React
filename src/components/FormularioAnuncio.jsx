import React, {useState} from "react";


const FormularioAnuncio = ({agregarAnuncio}) => {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [error, setError]= useState("");

    const manejarEnvio = (e) =>{
        e.preventDefault();
        if (titulo && descripcion && precio > 0) {
            agregarAnuncio({id: Date.now(), titulo, descripcion, precio: Number(precio) });
            setTitulo("");
            setDescripcion("");
            setPrecio("");
            setError("");
        } else {
            setError("El valor de precio ha de ser mayor a 0");
        }
    };

    return (
        <form onSubmit={manejarEnvio}>
            {error && <p className="error">{error}</p>}

            <input 
            type="text" 
            placeholder="Titulo"
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
            type="text" 
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
            />
            <button type="submit">Agregar Anuncio </button>
        </form>
    );
};

export default FormularioAnuncio