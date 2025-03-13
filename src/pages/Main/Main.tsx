import React, { DragEventHandler, useEffect } from 'react';
import { usePokemon } from '../../context';
import { useDecks, usePokemonData } from '../../hooks';
import { DecksSection, NewCardStackSection } from './components';
import { SelectedCardDisplay } from '../../components/SelectedCardDisplay';
import { ICardProps } from '../../shared/types';

export const Main = () => {
    const { pokemons, setPokemons, focusedPokemon, loading, fetchingDetails, getFocusedPokemon } =
        usePokemonData();
    const { deck1, deck2, handleDrop } = useDecks();
    const { selectedPokemon, handleCardClick } = usePokemon();

    const handleDragStart = (e: DragEventHandler<HTMLDivElement>, card: ICardProps) => {
        if (selectedPokemon.name !== card.name) {
            handleCardClick(card.name, card.image);
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        e.dataTransfer.setData('card', JSON.stringify(card));
    };

    const handleCardDrop = (deckNumber: number, card: ICardProps) => {
        if (pokemons.some((p) => p.name === card.name)) {
            setPokemons((prevPokemons) => prevPokemons.filter((p) => p.name !== card.name));
        }

        handleDrop(deckNumber, card);
    };

    useEffect(() => {
        if (selectedPokemon?.name) {
            getFocusedPokemon(selectedPokemon.name, selectedPokemon.image);
        }
    }, [selectedPokemon]);

    if (loading)
        return (
            <div className="size-full h-screen flex text-9xl bg-green-700 text-white justify-center items-center">
                Loading...
            </div>
        );

    return (
        <main className="flex flex-col justify-between w-full">
            <NewCardStackSection pokemons={pokemons[0]} onDragStart={handleDragStart} />

            {focusedPokemon ? (
                <div className="h-[450px] flex justify-center items-center">
                    <SelectedCardDisplay data={focusedPokemon} loading={fetchingDetails} />
                </div>
            ) : (
                <div className="h-[450px]" />
            )}

            <DecksSection
                deck1={deck1}
                deck2={deck2}
                handleDrop={handleCardDrop}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onDragStart={handleDragStart}
            />
        </main>
    );
};
