type PokemonProps = {
    pokemon: any;
}

export function Pokemon(props:PokemonProps){
    const { pokemon } = props;

    return(
        <div>
            {pokemon.name}
        </div>
    )
}