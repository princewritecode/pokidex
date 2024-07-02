import Search from "../Search/Search";
//import css
import './Pokedex.css';
import PokemonList from "../PokemonList/PokemonList";

export default function Pokedex()
{
    return (
        <div className="pokedex-wrapper">
            <Search></Search>
            <PokemonList></PokemonList>
        </div>
    );
}