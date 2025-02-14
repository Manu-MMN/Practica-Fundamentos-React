import React, { useState } from "react";
import { AnunciosProvider } from "./context/AnunciosContext";
import Rutas from "./Rutas";



const App = () => {

return (

    <AnunciosProvider>
        <Rutas />
    </AnunciosProvider>
)

}

export default App