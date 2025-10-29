import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/App.css";
import Tarefas from "./Tarefas.jsx";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Configuração do fade-in apenas para o Dashboard
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.5 } // duração do fade
  };

  return (
    <div className="app-container">

      {/* Relógio fixo */}
      <div className="clock">
        {time.toLocaleDateString()} {time.toLocaleTimeString()}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <motion.div {...fadeIn} className="dashboard-wrapper">
              <h1 className="dashboard-title">DashBoard</h1>
              <p>Developed by Layo</p>
            </motion.div>
          }
        />
        <Route
          path="/tarefas"
          element={<Tarefas />}
        />
      </Routes>

      {/* Barra de navegação inferior sempre visível */}
      <nav className="bottom-nav">
        <ul>
          <li><Link to="/">Inicial</Link></li>
          <li><Link to="/tarefas">Tarefas</Link></li>
          <li>Notas</li>
          <li>Sobre mim</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
