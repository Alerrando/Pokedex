import { ChangeEvent } from "react"
import { useState } from "react";

type SearchBarProps = {
    onSearch: (pokemon:any) => void;
}

export function Searchbar(props:SearchBarProps){
    const [search, setSearch] = useState("");
    const {onSearch} = props;
    
    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder="Buscar pokemon" onChange={e => onChangeHandler(e)} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )

    function onChangeHandler(e:ChangeEvent){
        setSearch((e.target as HTMLInputElement).value.toLowerCase());
        if((e.target as HTMLInputElement).value.length == 0) {onSearch(undefined)}
    }

    function onButtonClickHandler(){
        onSearch(search.toLowerCase());
    }
}