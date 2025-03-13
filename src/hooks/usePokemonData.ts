import { useState, useEffect } from 'react';
import { fetchPokemonDetails, fetchRandomPokemons } from '../services';
import { ICardProps, ISelectedCardProps } from '../shared/types';

export const usePokemonData = () => {
    const [pokemons, setPokemons] = useState<ICardProps[]>([]);
    const [focusedPokemon, setFocusedPokemon] = useState<ISelectedCardProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [fetchingDetails, setFetchingDetails] = useState(false);

    const getPokemons = async () => {
        try {
            const response = await fetchRandomPokemons();
            setPokemons(response.data.pokemons.results);
        } catch (err) {
            console.error('Failed to fetch Pokémon data');
        } finally {
            setLoading(false);
        }
    };

    const getFocusedPokemon = async (name: string, image: string) => {
        setFetchingDetails(true);

        try {
            const response = await fetchPokemonDetails(name);

            setFocusedPokemon({ ...response.data.pokemon, image });
        } catch (err) {
            console.error('Failed to fetch Pokémon details');
        } finally {
            setFetchingDetails(false);
        }
    };

    useEffect(() => {
        getPokemons();
    }, []);

    return {
        pokemons,
        focusedPokemon,
        loading,
        fetchingDetails,
        setPokemons,
        getFocusedPokemon,
    };
};
