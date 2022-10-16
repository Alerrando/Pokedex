import { Navbar } from './components/Navbar'
import './App.css'
import { Searchbar } from './components/Searchbar'
import { Pokedex } from './components/Pokedex'
import { useEffect, useState } from 'react'
import { getPokemom } from './api'

export function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <div>
      <Navbar />
      <Searchbar/>
      <Pokedex pokemons={pokemons.results} loading={loading} />
    </div>
  )

  async function fetchPokemon(){
    try {
      setLoading(true);
      const result = await getPokemom();
      setPokemons(result);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }
}