import { useContext } from "react"
import FavoriteContext from "../../context/favoritesContext"

export function Navbar() {
  const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  const { favoritePokemon} = useContext(FavoriteContext);

  return (

    <nav>
      <div>
        <img
          src={logoImg}
          alt="pokeapi-logo"
          className="navbar-img"
        />
      </div>
      <div>{favoritePokemon.length}❤️</div>
    </nav>
  );
}
