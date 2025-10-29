import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style/App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Configuração do fade-in para o Dashboard
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.5 },
  };

  return (
    <div className="app-container">
      {/* Relógio fixo */}
      <div className="clock">
        {time.toLocaleDateString()} {time.toLocaleTimeString()}
      </div>

      {/* Dashboard principal com efeito fade-in */}
      <motion.div {...fadeIn} className="dashboard-wrapper">
        <h1 className="dashboard-title">DashBoard</h1>
        <p>Developed by Layo</p>
      </motion.div>

      {/* Barra de navegação inferior */}
      <nav className="bottom-nav">
        <ul>
          <li className="active">Inicial</li>
          <li>Tarefas</li>
          <li>Notas</li>
          <li>Sobre mim</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
