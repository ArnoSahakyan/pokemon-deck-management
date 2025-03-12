import React from "react";
import {TCardProps} from "../../shared/types";
import {usePokemon} from "../../context";
import {Card, NewCardStack} from "../../components";

type NewCardStackProps = {
    pokemons: TCardProps[];
    onDragStart: (e: React.DragEvent<HTMLDivElement>, card: TCardProps) => void;
}

export const NewCardStackSection = ({
                                        pokemons,
                                        onDragStart,
                                    }: NewCardStackProps) => {
    const {selectedPokemon, handleCardClick} = usePokemon();

    return (
        <div className="flex flex-col items-start">
            <NewCardStack>
                {pokemons.length > 0 ? (
                    <Card
                        data={pokemons[0]}
                        onClick={() => handleCardClick(pokemons[0].name, pokemons[0].image)}
                        isSelected={selectedPokemon.name === pokemons[0].name}
                        onDragStart={(e) => onDragStart(e, pokemons[0])}
                    />
                ) : (
                    <div className="h-40"/>
                )}
            </NewCardStack>
        </div>
    );
};