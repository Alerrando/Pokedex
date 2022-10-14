import { Navbar } from './components/Navbar'
import './App.css'
import { Searchbar } from './components/Searchbar'
import { searchPokemon } from './api'

export function App() {

  async function onSearchHandler(pokemon:string){
    const result = await searchPokemon(pokemon);

    console.log(result)
  }

  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler} />
    </div>
  )
}