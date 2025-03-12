import {useState, useEffect} from "react";
import {fetchPokemonDetails, fetchRandomPokemons} from "../services/fetchPokemons";
import {TCardProps, TSelectedCardProps} from "../shared/types";

export const usePokemonData = () => {
    const [pokemons, setPokemons] = useState<TCardProps[]>([]);
    const [focusedPokemon, setFocusedPokemon] = useState<TSelectedCardProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [fetchingDetails, setFetchingDetails] = useState(false);

    const getPokemons = async () => {
        try {
            const response = await fetchRandomPokemons();
            setPokemons(response.data.pokemons.results);
        } catch (err) {
            console.error("Failed to fetch Pokémon data");
        } finally {
            setLoading(false);
        }
    };

    const getFocusedPokemon = async (name: string, image: string) => {
        setFetchingDetails(true);
        try {
            const response = await fetchPokemonDetails(name);
            setFocusedPokemon({...response.data.pokemon, image});
        } catch (err) {
            console.error("Failed to fetch Pokémon details");
        } finally {
            setFetchingDetails(false);
        }
    };

    useEffect(() => {
        getPokemons();
    }, []);

    return {
        pokemons,
        setPokemons,
        focusedPokemon,
        loading,
        fetchingDetails,
        getFocusedPokemon,
    };
};