import React, { useEffect } from 'react';
import { Card, NewCardStack } from '../../../../components';
import { ResetButton } from './components';
import { useDecksStore, usePokemonStore } from '../../../../store';
import {POKEMONS_LIMIT} from "../../../../shared";

export const NewCardStackSection = () => {
    const {
        pokemons,
        getPokemons,
        getFocusedPokemon,
        focusedPokemon,
        isLoading,
        handleDragStart,
        resetPokemons,
    } = usePokemonStore((state) => state);
    const resetDecks = useDecksStore((state) => state.resetDecks);

    useEffect(() => {
        getPokemons();
    }, []);

    const handleResetDecks = () => {
        if (pokemons.length < POKEMONS_LIMIT) {
            resetPokemons();
            resetDecks();
        }
    };

    const isResetDisabled = () => {
        return pokemons.length === POKEMONS_LIMIT || isLoading;
    };

    return (
        <div className="flex items-start justify-between">
            <NewCardStack>
                {isLoading ? (
                    <div className="w-full h-40 bg-gray-300 animate-pulse rounded-lg" />
                ) : pokemons[0] ? (
                    <Card
                        data={pokemons[0]}
                        isSelected={focusedPokemon?.name === pokemons[0].name}
                        onClick={() => getFocusedPokemon(pokemons[0].name, pokemons[0].image)}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        onDragStart={(e) => handleDragStart(e, pokemons[0])}
                    />
                ) : (
                    <div className="h-40" />
                )}
            </NewCardStack>

            <div className="p-4">
                <ResetButton onClick={handleResetDecks} disabled={isResetDisabled()} />
            </div>
        </div>
    );
};