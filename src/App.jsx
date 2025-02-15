import React, { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import { AnunciosProvider } from "./context/AnunciosContext";
import Rutas from "./Rutas";



const App = () => {

return (
<AuthProvider>
    <AnunciosProvider>
        <Rutas />
    </AnunciosProvider>
</AuthProvider>
)

}

export default App