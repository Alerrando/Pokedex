import { Pokemon } from "../Pokemon";

type PokedexProps = {
  pokemons: any[];
  loading: boolean;
};

export function Pokedex(props: PokedexProps) {
  const { pokemons, loading } = props;

  return (
    <>
      <div>
        <div className="pokedex-header">
          <h1>Pokedex</h1>
          <div>Padinação:</div>
        </div>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <div className="pokedex-grind">
            {pokemons?.map((pokemon, index) => (
                  <Pokemon pokemon={pokemon} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
