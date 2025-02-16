import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PaginaLogin = () => {
  const navigate = useNavigate();
  const { usuario, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recordar, setRecordar] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (usuario) {
      navigate("/anuncios");
    }
  }, [usuario, navigate]);

  const manejarLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (email && password) {
      const userData = { email, password };
      const loginExitoso = await login(userData, recordar);
      if (!loginExitoso) {
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } else {
      setError("Por favor, completa todos los campos con datos válidos.");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={manejarLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={recordar}
              onChange={(e) => setRecordar(e.target.checked)}
            />
            Recordar Contraseña
          </label>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default PaginaLogin;
