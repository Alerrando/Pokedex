export async function searchPokemon(pokemon:string){
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getPokemom(limit=50, offset=0){
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
        const response = await fetch(url)
        console.log(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}