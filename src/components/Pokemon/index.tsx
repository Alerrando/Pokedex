import { useContext } from "react";
import FavoriteContext from "../../context/favoritesContext";

type PokemonProps = {
  pokemon: any;
};

export function Pokemon(props: PokemonProps) {
  const {favoritePokemon, updateFavoritePokemon} = useContext(FavoriteContext);
  const { pokemon } = props;
  const hearth = "❤️";

  return (
    <div className="pokemon-card">
      <div className="pokmeon-image-contai">
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
                {type.type.name}
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
  );

  function onHearthClick() {
    updateFavoritePokemon(pokemon.name);
  }
}
