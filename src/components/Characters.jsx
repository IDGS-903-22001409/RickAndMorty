import React from "react";

function Characters({ Characters, setCharacters }) {
  //Metodo para resetear los personajes
  const resetCharacters = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Characters</h1>
      <span className="back-home" onClick={resetCharacters}>
        Refresar al inicio
      </span>
      <div className="container-characters">
        {Characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive"></span> Alive
                  </>
                ) : (
                  <>
                    <span className="dead"></span> Dead
                  </>
                )}
              </h6>

              <p>
                <span className="text-grey">Episodio: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-gray">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Back Home
      </span>
    </div>
  );
}

export default Characters;
