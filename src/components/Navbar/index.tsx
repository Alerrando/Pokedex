import { useContext } from "react";
import FavoriteContext from "../../context/favoritesContext";
import { Searchbar } from "../Searchbar";

type NavbarProps = {
  onSearch: (pokemon: any) => void;
  setTema: (tema: string) => void;
  tema: string;
};

export function Navbar(props: NavbarProps) {
  const { onSearch, setTema, tema } = props;
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const { favoritePokemon } = useContext(FavoriteContext);

  return (
    <nav className={`${tema}`}>
      <div className="container">
        <div className="container-navbar">
          <div>
            <img src={logoImg} alt="pokeapi-logo" className="navbar-img" />
          </div>
          <Searchbar onSearch={onSearch} />
        </div>

        <div className="container-gadgets">
          <span>{favoritePokemon.length}❤️</span>
          <span onClick={changeTema}>{tema == "white" ? "☀️" : "🌙"} </span>
        </div>
      </div>
    </nav>
  );

  function changeTema(){
    if(tema == "white") {setTema("dark")}
    else if(tema == "dark") {setTema("white")}
  }
}
