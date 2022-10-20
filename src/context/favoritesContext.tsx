import React from 'react'

const FavoriteContext = React.createContext({
    favoritePokemon: [],
    updateFavoritePokemon: (id:any) => null,
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;