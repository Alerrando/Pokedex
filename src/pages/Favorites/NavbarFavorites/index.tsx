import { useContext } from "react";
import FavoriteContext from "../../../context/favoritesContext";

export function NavbarFavorites() {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const { favoritePokemon } = useContext(FavoriteContext);

  return (
    <nav>
      <div className="container">
        <div className="container-navbar">
          <div>
            <img src={logoImg} alt="pokeapi-logo" className="navbar-img" />
          </div>
        </div>

        <div className="container-gadgets">
          <p>Favoritos {favoritePokemon.length}❤️</p>
        </div>
      </div>
    </nav>
  );
}
