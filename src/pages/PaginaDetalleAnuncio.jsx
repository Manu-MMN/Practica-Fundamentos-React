import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINTS } from '../config/api';
import { AuthContext } from '../context/AuthContext';

const PaginaDetalleAnuncio = () => {
    const { id } = useParams();
    const [anuncioDetalle, setAnuncioDetalle] = useState(null);
    const [error, setError] = useState(null);
    const { getAuthorizationHeader } = useContext(AuthContext);

    useEffect(() => {
        const obtenerDetallesAnuncio = async () => {
            try {
                const respuesta = await axios.get(API_ENDPOINTS.adverts.detail(id), {
                    headers: {
                        Authorization: getAuthorizationHeader(),
                    },
                });
                setAnuncioDetalle(respuesta.data);
            } catch (error) {
                console.error("Error al obtener los detalles del anuncio:", error);
                setError("No se pudo cargar el anuncio");
            }
        };

        obtenerDetallesAnuncio();
    }, [id, getAuthorizationHeader]);

    if (error) {
        return (
            <div className="text-center mt-8 text-red-600">
                {error}
            </div>
        );
    }

    if (!anuncioDetalle) {
        return <div className="text-center mt-8">Cargando...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6">{anuncioDetalle.name}</h1>
            
            {anuncioDetalle.photo && (
                <img 
                    src={anuncioDetalle.photo}
                    alt={anuncioDetalle.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
            )}

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <p className="text-gray-600">Estado</p>
                    <p className="text-xl font-semibold">
                        {anuncioDetalle.sale ? 'Se vende' : 'Se compra'}
                    </p>
                </div>
                <div>
                    <p className="text-gray-600">Precio</p>
                    <p className="text-xl font-semibold">{anuncioDetalle.price} €</p>
                </div>
            </div>

            {anuncioDetalle.tags && anuncioDetalle.tags.length > 0 && (
                <div className="mb-6">
                    <p className="text-gray-600 mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                        {anuncioDetalle.tags.map(tag => (
                            <span 
                                key={tag}
                                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaginaDetalleAnuncio;