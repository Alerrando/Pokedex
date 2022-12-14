import { useContext, useEffect, useState } from "react";
import { ArrowLeft, Star } from "phosphor-react";
import "./style.css";
import FavoriteContext from "../../../../context/favoritesContext";

type InfoPokemonProps = {
  setModal: (modal: boolean) => void;
  clickPokemon: string;
  pokemon: any;
};

export function InfoPokemon(props: InfoPokemonProps) {
  const { favoritePokemon, updateFavoritePokemon } = useContext(FavoriteContext);
  const { setModal, clickPokemon, pokemon } = props;
  const [infos, setInfos] = useState<any>([]);
  const hearth = favoritePokemon.includes(pokemon.name) ? "❤️" : "🖤";

  useEffect(() => {
    SearchPokemonClick();
  }, []);

  return (
    <div className="container-info">
      <div
        className="info-container"
        style={{
          background: `url(Habitat/${pokemon.types[0].type.name}.jpeg)`,
          backgroundSize: "cover",
        }}
      >
        <header className="info-header">
          <ArrowLeft size={32} onClick={() => setModal(false)} />
          <h2 className="h2">{infos.name}</h2>
          <h2 className="hearth-btn" onClick={() => updateFavoritePokemon(pokemon.name)}>{hearth}</h2>
          
        </header>

        <section>
          <figure>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </figure>

          <div className="container-infos-pokemon">
            <h2 className="h2">Infos</h2>
            <div className="type-info">
              {pokemon?.types.map((type: any, index: number) => (
                <div className="pokemon-type-text" key={index}>
                  <button
                    className="btn-type-pokemon"
                    style={{
                      background: `url("Habitat/${type.type.name}.jpeg")`,
                      backgroundSize: "cover",
                    }}
                  >
                    {type.type.name}
                  </button>
                </div>
              ))}
            </div>

            <div className="info-weight-height">
              <button>⚖️Peso: {pokemon.weight}</button> 
              <button>🪜Altura: {pokemon.height}</button> 
            </div>

            <div className="infos-pokemon">
              <h2 className="h2">stats</h2>
              {pokemon.stats.map((stat: any) => (
                <div className={`info-status ${stat.stat.name}`}>
                  <p>{stat.stat.name}</p>
                  <div className="status">
                    <div
                      className="status-quant"
                      style={{ width: stat.base_stat }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  async function SearchPokemonClick() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${clickPokemon}`
    );
    const data = await res.json();
    setInfos(data);
  }
}
