import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AnunciosProvider } from './context/AnunciosContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import ListadoAnuncios from './pages/ListadoAnuncios';
import CrearAnuncio from './pages/CrearAnuncio';
import PaginaDetalleAnuncio from './pages/PaginaDetalleAnuncio';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AnunciosProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/adverts" replace />} />
              <Route path="login" element={<Login />} />
              
              {/* Protección de toda la sección de anuncios */}
              <Route path="adverts" element={<RequireAuth />}>
                <Route index element={<ListadoAnuncios />} />
                <Route path="new" element={<CrearAnuncio />} />
                <Route path=":id" element={<PaginaDetalleAnuncio />} />
              </Route>

              <Route path="*" element={<Navigate to="/adverts" replace />} />
            </Route>
          </Routes>
        </AnunciosProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;