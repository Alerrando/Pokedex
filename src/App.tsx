import { Navbar } from "./components/Navbar";
import "./App.css";
import { Searchbar } from "./components/Searchbar";
import { Pokedex } from "./components/Pokedex";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "./api";
import { FavoriteProvider } from "./context/favoritesContext";

export function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const itensPerPage = 25;
  useEffect(() => {
    fetchPokemon();
  }, [page]);

  return (
    <>
      <FavoriteProvider
        value={{
          favoritePokemon: favorites,
          updateFavoritePokemon: updateFavoritePokemons,
        }}
      >
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
      </FavoriteProvider>
    </>
  );

  function updateFavoritePokemons(name:string) {
    const updateFavorite = [...favorites];
    console.log(favorites, updateFavorite)
    const favoriteIndex = favorites.indexOf(`${name}`);
    favoriteIndex >= 0
      ? updateFavorite.slice(favoriteIndex, 1)
      : updateFavorite.push(name);
    setFavorites(updateFavorite);
  }

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
