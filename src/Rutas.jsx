import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaAnuncios from "./pages/PaginaAnuncios";
import PaginaDetalleAnuncio from "./pages/PaginaDetalleAnuncio";
import PaginaNuevoAnuncio from "./pages/PaginaNuevoAnuncio";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";

const Rutas = () =>{
    return (
<BrowserRouter>
<Routes>
<Route path="/login" element={<PaginaLogin />} />
<Route path="/anuncios" element={<PaginaAnuncios/>} />
<Route path="/anuncios/:id" element={<PaginaDetalleAnuncio/>} />
<Route path="/anuncios/nuevo" element={<PaginaNuevoAnuncio />} />
<Route path="*" element={<PaginaNoEncontrada/>} />

</Routes>

</BrowserRouter>
    )
}

export default Rutas