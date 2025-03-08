import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnunciosContext } from '../context/AnunciosContext';
import { AuthContext } from '../context/AuthContext';
import ConfirmDialog from '../components/ConfirmDialog';

const ListadoAnuncios = () => {
    const { anuncios, loading, obtenerAnuncios, eliminarAnuncio } = useContext(AnunciosContext);
    const { isAuthenticated } = useContext(AuthContext);
    const [confirmDelete, setConfirmDelete] = useState({ show: false, id: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const cargarAnuncios = async () => {
            if (!isAuthenticated) return;
            
            try {
                setError(null);
                await obtenerAnuncios();
            } catch (error) {
                if (isMounted) {
                    setError('Error al cargar los anuncios');
                }
            }
        };

        cargarAnuncios();

        return () => {
            isMounted = false;
        };
    }, [isAuthenticated]);

    const handleDeleteClick = (id) => {
        setConfirmDelete({ show: true, id });
    };

    const handleConfirmDelete = async () => {
        try {
            await eliminarAnuncio(confirmDelete.id);
            setConfirmDelete({ show: false, id: null });
        } catch (error) {
            console.error('Error al eliminar el anuncio:', error);
        }
    };

    const handleRetry = async () => {
        try {
            setError(null);
            await obtenerAnuncios();
        } catch (error) {
            setError('Error al cargar los anuncios');
        }
    };

    if (error) {
        return (
            <div className="text-center mt-8">
                <p className="text-red-600 mb-4">{error}</p>
                <button 
                    onClick={handleRetry}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Reintentar
                </button>
            </div>
        );
    }

    if (loading) {
        return <div className="text-center mt-8">Cargando anuncios...</div>;
    }

    if (!anuncios.length) {
        return (
            <div className="text-center mt-8">
                <p className="mb-4">No hay anuncios disponibles</p>
                <Link 
                    to="/adverts/new"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Crear Anuncio
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Listado de Anuncios</h1>
                <Link 
                    to="/adverts/new"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Crear Anuncio
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {anuncios.map(anuncio => (
                    <div key={anuncio.id} className="border rounded-lg p-4 shadow">
                        <Link to={`/adverts/${anuncio.id}`}>
                            <h2 className="text-xl font-semibold mb-2">{anuncio.name}</h2>
                            {anuncio.photo && (
                                <img 
                                    src={anuncio.photo}
                                    alt={anuncio.name}
                                    className="w-full h-48 object-cover mb-2 rounded"
                                />
                            )}
                            <p className="text-lg font-bold">{anuncio.price} €</p>
                            <p className="text-sm text-gray-600">
                                {anuncio.sale ? 'Se vende' : 'Se compra'}
                            </p>
                            {anuncio.tags && (
                                <div className="mt-2">
                                    {anuncio.tags.map(tag => (
                                        <span 
                                            key={tag}
                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </Link>
                        <button
                            onClick={() => handleDeleteClick(anuncio.id)}
                            className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>

            <ConfirmDialog
                isOpen={confirmDelete.show}
                onClose={() => setConfirmDelete({ show: false, id: null })}
                onConfirm={handleConfirmDelete}
                title="Confirmar eliminación"
                message="¿Estás seguro de que deseas eliminar este anuncio? Esta acción no se puede deshacer."
            />
        </div>
    );
};

export default ListadoAnuncios; 