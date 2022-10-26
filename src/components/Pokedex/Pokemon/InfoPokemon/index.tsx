import { useEffect, useState } from 'react';
import './style.css'

type InfoPokemon = {
    setModal: (modal:boolean) => void;
    clickPokemon: string,
    pokemon:any
}

export function InfoPokemon(props:InfoPokemon){
    const { setModal, clickPokemon, pokemon } = props;
    const [ infos, setInfos ] = useState<any>([]);

    useEffect(() => {
        SearchPokemonClick();
    }, [])

    console.log(pokemon)
    
    
    return(
        <div className="container-info">
            <div className="info-container">
                <header className="info-header">
                    {infos.name}
                </header>
            </div>
        </div>
    )
    
    async function SearchPokemonClick(){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${clickPokemon}`);
        const data = await res.json();
        setInfos(data);
    }
}