import { Navbar } from "./components/Navbar";
import "./App.css";
import { Searchbar } from "./components/Searchbar";
import { Pokedex } from "./components/Pokedex";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "./api";

export function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itensPerPage = 25;
  useEffect(() => {
    fetchPokemon();
  }, [page]);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );

  async function fetchPokemon() {
    try {
      setLoading(true);
      const data = await getPokemon(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon: any) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log(error);
    }
  }
}
