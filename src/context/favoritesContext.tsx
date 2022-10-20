import React from 'react'


const FavoriteContext = React.createContext({
    favoritePokemon: [],
    updateFavoritePokemon: (name:string) => null,
})

export const FavoriteProvider = FavoriteContext.Provider;


export default FavoriteContext;