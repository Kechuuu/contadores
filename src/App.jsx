import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <h1>Counter</h1>
        <p>{count}</p>
        <button className="btn " onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </header>
      <section className="sobreNosotros">
        <h2>Sobre el contador</h2>
        <p>Contenido sobre contadores..</p>
      </section>
      <aside className="aside">
        <h2>Noticias Relacionadas</h2>
        <p>Contenido adicional...</p>
      </aside>
      <footer className="footer">
        <p>&copy; 2024 Mi Sitio Web</p>
      </footer>
    </>
  );
}

export default App;
