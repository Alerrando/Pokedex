import { ChangeEvent } from "react"
import { useState } from "react";
import { searchPokemon } from "../../api";

export function Searchbar(){
    const [search, setSearch] = useState("charizard");
    const [pokemon, setPokemon] = useState<any>()
    
    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder="buscar pokemon" onChange={e => setSearch((e.target as HTMLInputElement).value)} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={`foto do pokemon ${pokemon.name}`} />
                </div>
            ) : null}
        </div>
    )

    function onButtonClickHandler(){
       onSearchHandler(search)
    }

    async function onSearchHandler(pokemon:string){
        const result = await searchPokemon(pokemon);
        setPokemon(result)
    }
}