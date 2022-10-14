import { ChangeEvent } from "react"
import { useState } from "react";

type SearchBarProps = {
    onSearch: (pokemon:string) => void;
}

export function Searchbar(props:SearchBarProps){
    const { onSearch } = props;
    const [search, setSearch] = useState("charizard")
    
    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder="buscar pokemon" onChange={e => setSearch((e.target as HTMLInputElement).value)} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )

    function onButtonClickHandler(){
       const pokemon = onSearch(search);
    }
}