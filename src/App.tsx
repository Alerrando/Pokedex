import { Navbar } from "./components/Navbar";
import "./App.css";
import { Pokedex } from "./components/Pokedex";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonData, searchPokemon } from "./api";
import { FavoriteProvider } from "./context/favoritesContext";

const favoritesKeys = "f";
export function App() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const itensPerPage = 24;

  useEffect(() => {
    loadFavoritePokemons();

  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [page])

  return (
    <>
        <FavoriteProvider
          value={{
            favoritePokemon: favorites,
            updateFavoritePokemon: updateFavoritePokemons,
          }}
        >
          <div>
            <Navbar onSearch={onSearchHandler} />
            {notFound == true ? (
              <div className="not-found-text">Pokémon não encontrado</div>
            ) : (
              <Pokedex
                pokemons={pokemons}
                loading={loading}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            )}
          </div>
        </FavoriteProvider>
    </>
  );

  function loadFavoritePokemons() {
    try {
      const pokemons = JSON.parse(localStorage.getItem(favoritesKeys) || "");

      if (pokemons.length > 0) {
        setFavorites(pokemons);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onSearchHandler(pokemon:any) {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);

    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }

    setLoading(false);
  }

  function updateFavoritePokemons(name: string) {
    const updateFavorite = [...favorites];
    const favoriteIndex = favorites.indexOf(`${name}`);
    console.log(favoriteIndex)
    favoriteIndex >= 0
      ? updateFavorite.splice(favoriteIndex, 1)
      : updateFavorite.push(name);

    localStorage.setItem(favoritesKeys, JSON.stringify(updateFavorite));
    setFavorites(updateFavorite);
  }

  async function fetchPokemon() {
    try {
      setLoading(true);
      setNotFound(false);
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
