import { Route, Routes } from "react-router";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";
export default function CustomRoutes()
{
    return (
        <Routes>
            <Route path="/" element=<Pokedex></Pokedex> />
            <Route path="/pokemon/:id" element=<PokemonDetails></PokemonDetails> />
            <Route path="/" element={Pokedex} />
        </Routes>
    );
}