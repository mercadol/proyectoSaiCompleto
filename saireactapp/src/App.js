import './assets/css/App.css';

function App() {
  return (
    <div className="container">
        <div className="content">
          <header>
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                  <li><a href="home.html">Home</a></li>
                  <li><a href="personas.html">Lista de Personas</a></li>
                  <li><a href="error404.html">Error 404</a></li>
                  <li><a href="formulario.html">Formularios</a></li>
              </ul>
              <h1>esta es mi maqueta</h1>
            </div>
          </nav>
      </header>
      <footer id="footer">
        <div className="center">
          <p>
              &copy; Leonardo Mercardo 2020
          </p>
        </div>
      </footer>
    </div>
  </div>
  );
}

export default App;
