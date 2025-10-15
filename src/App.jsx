import React, { useState } from "react";
import imagenRickMorty from "./img/rick-morty.png";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  //Definimos un estado para almacenar los datos de los personajes
  const [characters, setCharacters] = useState(null);

  const regApi = async () => {
    //realizamos la peticion a la api
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    console.log(characterApi);
    setCharacters(characterApi.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {characters ? (
          <Characters Characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imagenRickMorty} alt="Rick&Morty" className="img-home" />
            <br />
            <button className="btn-search" onClick={regApi}>
              Cargar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
