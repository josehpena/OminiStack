import React, { useState, useEffect } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

// Componente = Bloco isolado de HTML, CSS e JavaScript, o qual não interfere no restante da aplicação
// Propriedade = Informação que um componente PAI(App.js) passa para o componente FILHO
// Estado = informação mantida pelo componente (Lembrar: imutabilidade)

function App() {
  const [github_username, setGitHubUsername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGitHubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/52181998?s=400&u=d31287d32b2785af5bdb1391f45bf50edddbeab7&v=4"
                alt="Jose Pena"
              />
              <div className="user-inf">
                <strong>José Pena</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>TESTE PENA</p>
            <a href="https://github.com/josehpena">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/52181998?s=400&u=d31287d32b2785af5bdb1391f45bf50edddbeab7&v=4"
                alt="Jose Pena"
              />
              <div className="user-inf">
                <strong>José Pena</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>TESTE PENA</p>
            <a href="https://github.com/josehpena">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/52181998?s=400&u=d31287d32b2785af5bdb1391f45bf50edddbeab7&v=4"
                alt="Jose Pena"
              />
              <div className="user-inf">
                <strong>José Pena</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>TESTE PENA</p>
            <a href="https://github.com/josehpena">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/52181998?s=400&u=d31287d32b2785af5bdb1391f45bf50edddbeab7&v=4"
                alt="Jose Pena"
              />
              <div className="user-inf">
                <strong>José Pena</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>TESTE PENA</p>
            <a href="https://github.com/josehpena">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
