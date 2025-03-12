import React, {useEffect} from "react";
import {usePokemon} from "../../context";
import {useDecks, usePokemonData} from "../../hooks";
import {DecksSection, NewCardStackSection} from "../../sections";
import {SelectedCardDisplay} from "../../components/SelectedCardDisplay";
import {TCardProps} from "../../shared/types";

export const Main = () => {
    const {pokemons, setPokemons, focusedPokemon, loading, fetchingDetails, getFocusedPokemon} = usePokemonData();
    const {deck1, deck2, handleDrop} = useDecks();
    const {selectedPokemon, handleCardClick} = usePokemon();

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: TCardProps) => {
        if (selectedPokemon.name !== card.name) {
            handleCardClick(card.name, card.image);
        }
        e.dataTransfer.setData("card", JSON.stringify(card));
    };

    const handleCardDrop = (deckNumber: number, card: TCardProps) => {
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
        <main className="relative flex flex-col justify-between w-full">
            <img
                src="/background.png"
                alt="Background"
                className="absolute w-full h-screen object-cover -z-10"
            />

            <NewCardStackSection pokemons={pokemons} onDragStart={handleDragStart}/>

            {focusedPokemon ? (
                <div className="h-[500px] flex justify-center items-center p-12">
                    <SelectedCardDisplay data={focusedPokemon} loading={fetchingDetails}/>
                </div>
            ) : (
                <div className="h-[500px]"/>
            )}

            <DecksSection
                deck1={deck1}
                deck2={deck2}
                handleDrop={handleCardDrop}
                onDragStart={handleDragStart}
            />
        </main>
    );
};