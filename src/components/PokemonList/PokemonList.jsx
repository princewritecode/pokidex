import { useEffect, useState } from "react";
import './PokemonList.css';
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
export default function PokemonList()
{
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [pokedexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const downloadPokemon = async () =>
    {
        setLoading(true);
        const response = await axios.get(pokedexUrl);
        const pokemonResults = response.data.results;
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        console.log(response.data);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        const res = pokemonData.map((pokeData) =>
        {
            const pokemon = pokeData.data;
            return { id: pokemon.id, name: pokemon.name, image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokeData.sprites.front_shiny, types: pokemon.types };
        });
        setPokemonList(res);
        setLoading(false);
    };
    useEffect(
        () =>
        {
            downloadPokemon();
        },
        [pokedexUrl]);
    return (
        <div className="pokemon-list-wrapper">

            <div className="pokemon-wrapper">    {(isLoading) ? 'Loading...' : pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}></Pokemon>)}
            </div>
            <div className="controls">
                <button disabled={prevUrl === null} onClick={() =>
                {
                    setPokedexUrl(prevUrl);
                }}>Prev</button>
                <button disabled={nextUrl === null} onClick={() => { setPokedexUrl(nextUrl); }}>Next</button>
            </div>
        </div>

    );
}