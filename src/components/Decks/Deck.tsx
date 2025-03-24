import React, { FC, useState } from 'react';
import { Card } from '../Card';
import { ICardProps } from '../../shared';
import { usePokemonStore } from '../../store';

interface IDeckProps {
    data: ICardProps[];
    onDrop: (card: ICardProps) => void;
}

export const Deck: FC<IDeckProps> = ({ data, onDrop }) => {
    const { getFocusedPokemon, focusedPokemon, handleDragStart } = usePokemonStore((state) => state);
    const [deckName, setDeckName] = useState('Deck Name');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeckName(e.target.value);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const cardData = JSON.parse(e.dataTransfer.getData('card'));
        onDrop(cardData);
    };

    return (
        <div
            className="bg-white flex flex-col justify-center gap-1 p-4 pt-2 rounded-lg"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <input
                type="text"
                value={deckName}
                onChange={handleChange}
                placeholder="Untitled Deck"
                className="max-w-40 border-none outline-none bg-transparent text-lg font-bold self-start"
            />

            <div className="min-h-[164px] min-w-32 flex gap-4 justify-center items-center">
                {data.map((card: ICardProps) => (
                    <Card
                        data={card}
                        isSelected={focusedPokemon?.name === card.name}
                        key={card.name}
                        onClick={() => getFocusedPokemon(card.name, card.image)}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        onDragStart={(e) => handleDragStart(e, card)}
                    />
                ))}
            </div>
        </div>
    );
};