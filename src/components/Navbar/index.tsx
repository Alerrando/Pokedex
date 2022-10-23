import { useContext } from "react";
import FavoriteContext from "../../context/favoritesContext";
import { Searchbar } from "./Searchbar";

type NavbarProps = {
  onSearch: (pokemon: any) => void;
};

export function Navbar(props: NavbarProps) {
  const { onSearch} = props;
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
          <span>Favoritos {favoritePokemon.length}❤️</span>
        </div>
      </div>
      <Searchbar onSearch={onSearch} />
    </nav>
  );
}
