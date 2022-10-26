import { useEffect, useState } from 'react';
import { ArrowLeft, Star } from 'phosphor-react'
import './style.css'

type InfoPokemonProps = {
    setModal: (modal:boolean) => void;
    clickPokemon: string,
    pokemon:any
}

export function InfoPokemon(props:InfoPokemonProps){
    const { setModal, clickPokemon, pokemon } = props;
    const [ infos, setInfos ] = useState<any>([]);

    useEffect(() => {
        SearchPokemonClick();
    }, [])
    
    
    return(
        <div className="container-info">
            <div className="info-container" style={{
                background: `url(Habitat/${pokemon.types[0].type.name}.jpeg)`,
                backgroundSize: "cover"
            }}>
                <header className="info-header">
                    <ArrowLeft size={32} onClick={() => setModal(false)} />
                    <h2 className='h2'>{infos.name}</h2>
                    <Star size={32} className="icon-star" />
                </header>

                <section>
                    <figure>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </figure>

                    <div className="container-infos-pokemon">
                        
                    </div>
                </section>
            </div>
        </div>
    )
    
    async function SearchPokemonClick(){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${clickPokemon}`);
        const data = await res.json();
        setInfos(data);
    }
}