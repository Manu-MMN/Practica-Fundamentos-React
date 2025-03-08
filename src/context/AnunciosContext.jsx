import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { API_ENDPOINTS } from '../config/api';
import { AuthContext } from './AuthContext';

export const AnunciosContext = createContext();

export const AnunciosProvider = ({ children }) => {
    const [anuncios, setAnuncios] = useState([]);
    const [loading, setLoading] = useState(false);
    const { getAuthorizationHeader } = useContext(AuthContext);

    const obtenerAnuncios = async () => {
        if (loading) return;
        setLoading(true);
        
        try {
            const respuesta = await axios.get(API_ENDPOINTS.adverts.base, {
                headers: { Authorization: getAuthorizationHeader() }
            });
            setAnuncios(respuesta.data);
            return respuesta.data;
        } catch (error) {
            setAnuncios([]);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const agregarAnuncio = async (formData) => {
        try {
            const respuesta = await axios.post(API_ENDPOINTS.adverts.base, formData, {
                headers: {
                    Authorization: getAuthorizationHeader(),
                    "Content-Type": "multipart/form-data",
                }
            });
            return respuesta.data;
        } catch (error) {
            throw error;
        }
    };

    const eliminarAnuncio = async (id) => {
        try {
            await axios.delete(API_ENDPOINTS.adverts.detail(id), {
                headers: { Authorization: getAuthorizationHeader() }
            });
            setAnuncios(prevAnuncios => 
                prevAnuncios.filter(anuncio => anuncio.id !== id)
            );
        } catch (error) {
            throw error;
        }
    };

    return (
        <AnunciosContext.Provider value={{ 
            anuncios, 
            loading,
            obtenerAnuncios,
            agregarAnuncio, 
            eliminarAnuncio
        }}>
            {children}
        </AnunciosContext.Provider>
    );
};

export default AnunciosProvider;