export async function searchPokemon(pokemon:string){
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getPokemon(limit=50, offset=0){
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getPokemonData(url:string){
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}