import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children}) =>{

    const [usuario, setUsuario] = useState(() =>{
        const storedUser = localStorage.getItem("usuarioLogado");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    //con esto nos logeamos
    const login = (userData, recordar) =>{
        setUsuario(userData);
        if (recordar) {
            localStorage.setItem("usuarioLogado", JSON.stringify(userData));
        }
    };

//con esto nos deslogeamos

    const logout = () =>{
        setUsuario(null);
        localStorage.removeItem("usuarioLogado");
    };

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )



}