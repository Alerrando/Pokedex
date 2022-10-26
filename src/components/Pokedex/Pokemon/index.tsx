import { useContext, useState } from "react";
import FavoriteContext from "../../../context/favoritesContext";
import { InfoPokemon } from "./InfoPokemon";

type PokemonProps = {
  pokemon: any;
};

export function Pokemon(props: PokemonProps) {
  const { favoritePokemon, updateFavoritePokemon } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const [modal, setModal] = useState(false);
  const [clickPokemon, setClickPokemon] = useState("");
  const hearth = favoritePokemon.includes(pokemon.name) ? "❤️" : "🖤";
  const typePokemon = pokemon.types[0].type.name;

  return (
    <>
      <div
        className={`pokemon-card`}
        style={{
          background: `url("Habitat/${typePokemon}.jpeg")`,
        }}
        onClick={() => onClickPokemon()}
      >
        <div className="pokemon-image-container">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemon-image"
          />
        </div>

        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon?.types.map((type: any, index: number) => (
                <div className="pokemon-type-text" key={index}>
                  <button
                    className="btn-type-pokemon"
                    style={{
                      background: `url("/public/Habitat/${type.type.name}.jpeg")`,
                      backgroundSize: "cover",
                    }}
                  >
                    {type.type.name}
                  </button>
                </div>
              ))}
            </div>
            <button
              className="pokemon-hearth-btn"
              onClick={() => onHearthClick()}
            >
              {hearth}
            </button>
          </div>
        </div>
      </div>
      {modal ? (
        <InfoPokemon setModal={setModal} clickPokemon={clickPokemon} pokemon={pokemon} />
      ): null}
    </>
  );

  function onHearthClick() {
    updateFavoritePokemon(pokemon.name);
  }

  function onClickPokemon() {
    setModal(!modal);
    setClickPokemon(pokemon.name);
  }
}
