type PokemonProps = {
    pokemon: any;
}

export function Pokemon(props:PokemonProps){
    const { pokemon } = props;

    return(
        <div className="pokemon-card">
            <div className="pokmeon-image-contai">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
            </div>
            
            {pokemon.name}
        </div>
    )
}