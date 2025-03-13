import React, { DragEventHandler, FC } from 'react';
import { ICardProps } from '../../../../shared/types';
import { usePokemon } from '../../../../context';
import { Card, NewCardStack } from '../../../../components';

interface INewCardStackProps {
    pokemons: ICardProps;
    onDragStart: (e: DragEventHandler<HTMLDivElement>, card: ICardProps) => void;
}

export const NewCardStackSection: FC<INewCardStackProps> = ({ pokemons, onDragStart }) => {
    const { selectedPokemon, handleCardClick } = usePokemon();

    return (
        <div className="flex flex-col items-start">
            <NewCardStack>
                {pokemons ? (
                    <Card
                        data={pokemons}
                        isSelected={selectedPokemon.name === pokemons.name}
                        onClick={() => handleCardClick(pokemons.name, pokemons.image)}
                        onDragStart={(e) => onDragStart(e, pokemons)}
                    />
                ) : (
                    <div className="h-40" />
                )}
            </NewCardStack>
        </div>
    );
};
