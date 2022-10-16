import { Navbar } from './components/Navbar'
import './App.css'
import { Searchbar } from './components/Searchbar'
import { Pokedex } from './components/Pokedex'
import { useEffect, useState } from 'react'
import { getPokemon, getPokemonData } from './api'

export function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([])

  useEffect(() => {
    fetchPokemon()
  }, [])

  console.log(pokemons)

  return (
    <div>
      <Navbar />
      <Searchbar/>
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  )

  async function fetchPokemon(){
    try {
      setLoading(true);
      const data = await getPokemon();
      const promises = data.results.map(async (pokemon:object) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises)
      setPokemons(results);
      console.log(pokemons)
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }
}