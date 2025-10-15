import React from "react";

function Characters({ Characters, resetApp }) {
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetApp}>
        ← Volver al inicio
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
                    <span className="alive"></span> Vivo
                  </>
                ) : character.status === "Dead" ? (
                  <>
                    <span className="dead"></span> Muerto
                  </>
                ) : (
                  <>
                    <span className="unknown"></span> Desconocido
                  </>
                )}
              </h6>

              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
              <p>
                <span className="text-grey">Género: </span>
                <span>{character.gender}</span>
              </p>
              <p>
                <span className="text-grey">Origen: </span>
                <span>{character.origin.name}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetApp}>
        ← Volver al inicio
      </span>
    </div>
  );
}

export default Characters;
