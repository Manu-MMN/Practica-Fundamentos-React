import React from "react";
import { useNavigate } from "react-router-dom";

const PaginaLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [recordar, setRecordar] = React.useState(false);
  const [error, setError] = React.useState("");

  const manejarLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      console.log("intento de login", { email, password, recordar });

      if (recordar) {
        localStorage.setItem("usuarioLogado", JSON.stringify({ email }));
      }
      navigate("/anuncios");
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
          <div>
            <label>
              <input
                type="Checkbox"
                checked={recordar}
                onChange={(e) => setRecordar(e.target.checked)}
              />
              Recordar Contraseña
            </label>
          </div>
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default PaginaLogin;
