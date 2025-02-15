import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaAnuncios from "./pages/PaginaAnuncios";
import PaginaDetalleAnuncio from "./pages/PaginaDetalleAnuncio";
import PaginaNuevoAnuncio from "./pages/PaginaNuevoAnuncio";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import Navegacion from "./components/Navegacion";
import RutaProtegida from "./components/RutaProtegida";

const Rutas = () =>{
    return (
<BrowserRouter>

<Navegacion/>

<Routes>

<Route path="/login" element={<PaginaLogin />} />

<Route path="/anuncios" element={<RutaProtegida> <PaginaAnuncios/> </RutaProtegida>} />
<Route path="/anuncios/:id" element={<RutaProtegida> <PaginaDetalleAnuncio/> </RutaProtegida>} />
<Route path="/anuncios/nuevo" element={<RutaProtegida> <PaginaNuevoAnuncio/> </RutaProtegida>} />

<Route path="*" element={<PaginaNoEncontrada/>} />

</Routes>

</BrowserRouter>
)
}

export default Rutas