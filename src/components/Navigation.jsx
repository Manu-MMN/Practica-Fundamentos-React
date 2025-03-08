import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import ConfirmDialog from './ConfirmDialog';

const Navigation = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const [showConfirmLogout, setShowConfirmLogout] = useState(false);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        setShowConfirmLogout(true);
    };

    const handleConfirmLogout = () => {
        logout();
        setShowConfirmLogout(false);
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    NodePop
                </Link>
                
                <div className="space-x-4">
                    {isAuthenticated ? (
                        <>
                            <Link to="/adverts" className="hover:text-gray-300">
                                Anuncios
                            </Link>
                            <Link to="/adverts/new" className="hover:text-gray-300">
                                Crear Anuncio
                            </Link>
                            <button
                                onClick={handleLogoutClick}
                                className="hover:text-gray-300"
                            >
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="hover:text-gray-300">
                            Iniciar Sesión
                        </Link>
                    )}
                </div>
            </div>

            <ConfirmDialog
                isOpen={showConfirmLogout}
                onClose={() => setShowConfirmLogout(false)}
                onConfirm={handleConfirmLogout}
                title="Confirmar Cierre de Sesión"
                message="¿Estás seguro de que deseas cerrar sesión?"
            />
        </nav>
    );
};

export default Navigation; 