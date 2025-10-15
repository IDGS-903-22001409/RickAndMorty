import React, { useState } from "react";
import imagenRickMorty from "./img/rick-morty.png";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const [info, setInfo] = useState(null);
  const [searchName, setSearchName] = useState("");

  const reqApi = async (url = "https://rickandmortyapi.com/api/character") => {
    try {
      const api = await fetch(url);
      const characterApi = await api.json();

      console.log(characterApi);
      setCharacters(characterApi.results);
      setInfo(characterApi.info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchName.trim() === "") {
      reqApi();
      return;
    }

    const url = `https://rickandmortyapi.com/api/character/?name=${searchName}`;
    await reqApi(url);
  };

  const handleNextPage = () => {
    if (info && info.next) {
      reqApi(info.next);
    }
  };

  const handlePrevPage = () => {
    if (info && info.prev) {
      reqApi(info.prev);
    }
  };

  const resetApp = () => {
    setCharacters(null);
    setInfo(null);
    setSearchName("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {characters ? (
          <>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Buscar personaje por nombre..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="btn-search">
                Buscar
              </button>
            </form>

            <Characters
              Characters={characters}
              setCharacters={setCharacters}
              resetApp={resetApp}
            />

            <div className="pagination">
              <button
                className="btn-pagination"
                onClick={handlePrevPage}
                disabled={!info || !info.prev}
              >
                ← Anterior
              </button>

              <span className="page-info">
                {info && `Página ${getCurrentPage(info)}`}
              </span>

              <button
                className="btn-pagination"
                onClick={handleNextPage}
                disabled={!info || !info.next}
              >
                Siguiente →
              </button>
            </div>
          </>
        ) : (
          <>
            <img src={imagenRickMorty} alt="Rick&Morty" className="img-home" />
            <br />
            <button className="btn-search" onClick={() => reqApi()}>
              Cargar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

// Función auxiliar para obtener el número de página actual
function getCurrentPage(info) {
  if (!info || !info.next) return info?.pages || 1;

  const nextUrl = new URL(info.next);
  const nextPage = parseInt(nextUrl.searchParams.get("page")) || 2;
  return nextPage - 1;
}

export default App;
