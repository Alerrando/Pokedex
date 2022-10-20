import { ChangeEvent } from "react"
import { useState } from "react";
import { searchPokemon } from "../../api";

type SearchBarProps = {
    onSearch: (pokemon:string) => void;
}

export function Searchbar(props:SearchBarProps){
    const [search, setSearch] = useState("");
    const {onSearch} = props;

    console.log(search)
    
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
        if(onChangeHandler(search)){onSearch(search)}

    }

    function onChangeHandler(e:string){
        if(e === "") {return ""}

        return true;
    }
}