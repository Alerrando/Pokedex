import React from "react";

type favoriteContextProps = {
  favoritePokemon: string[];
  updateFavoritePokemon: (name: string) => void;
};

const FavoriteContext = React.createContext<favoriteContextProps>({
  favoritePokemon: [],
  updateFavoritePokemon: () => {},
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
