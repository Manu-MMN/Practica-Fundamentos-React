import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PaginaDetalleAnuncio = () => {
    const { id } = useParams();
    const [anuncioDetalle, setAnuncioDetalle] = useState(null);

    const obtenerDetallesAnuncio = async (id) => {
        try {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            const respuesta = await axios.get(`http://localhost:3001/api/v1/adverts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Detalles del anuncio:", respuesta.data);
            setAnuncioDetalle(respuesta.data);
        } catch (error) {
            console.error("Error al obtener los detalles del anuncio:", error);
        }
    };

    useEffect(() => {
        obtenerDetallesAnuncio(id);
    }, [id]);

    return (
        <div>
            <h1>Detalle del Anuncio</h1>
            <p>ID del anuncio: {id}</p>
            {anuncioDetalle && (
                <div>
                    <h2>{anuncioDetalle.name}</h2>
                    {anuncioDetalle.sale ? (
                        <p>Se vende</p> // Mostrar "Se vende" si sale es true
                    ) : (
                        <p>Se compra</p> // Mostrar "Se compra" si sale es false
                    )}
                    <p>{anuncioDetalle.description}</p>
                    <p>Precio: {anuncioDetalle.price} €</p>
                    {/* ... otros detalles */}
                </div>
            )}
        </div>
    );
};

export default PaginaDetalleAnuncio;