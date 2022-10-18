import { Pagination } from "../Pagination";
import { Pokemon } from "../Pokemon";

type PokedexProps = {
  pokemons: any[];
  loading: boolean;
  page: number,
  totalPages: number,
};

export function Pokedex(props: PokedexProps) {
  const { pokemons, loading, page, totalPages } = props;

  return (
    <>
      <div>
        <div className="pokedex-header">
          <h1>Pokedex</h1>
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
          />
        </div>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <div className="pokedex-grid">
            {pokemons?.map((pokemon, index) => (
              <Pokemon pokemon={pokemon} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );

  function onLeftClickHandler(){
    console.log("votla")
  }

  function onRightClickHandler(){
    console.log("avança")
  }
}
