import { Pagination } from "../Pagination";
import { Pokemon } from "../Pokemon";

type PokedexProps = {
  pokemons: any[];
  loading: boolean;
  page: number,
  setPage: (page:number) => void,
  totalPages: number,
};

export function Pokedex(props: PokedexProps) {
  const { pokemons, loading, page, setPage,totalPages } = props;

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

  function onRightClickHandler(){
    page+1 < totalPages && setPage(page+1)
  }

  function onLeftClickHandler(){
    page !=0 && setPage(page - 1);
  }
}
