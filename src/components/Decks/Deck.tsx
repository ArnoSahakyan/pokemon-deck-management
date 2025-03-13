import React, { FC, useState } from 'react';
import { Card } from '../Card';
import { ICardProps } from '../../shared/types';
import { usePokemon } from '../../context';

interface IDeckProps {
    data: ICardProps[];
    onDrop: (card: ICardProps) => void;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, card: ICardProps) => void;
}

export const Deck: FC<IDeckProps> = ({ data, onDrop, onDragStart }) => {
    const { selectedPokemon, handleCardClick } = usePokemon();
    const [deckName, setDeckName] = useState('Deck Name');
    const [isEditing, setIsEditing] = useState(false);

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
            {isEditing || deckName.length === 0 ? (
                <input
                    type="text"
                    value={deckName}
                    onChange={handleChange}
                    onBlur={() => setIsEditing(false)}
                    placeholder="Untitled Deck"
                    className="w-full border-none outline-none bg-transparent text-lg font-bold self-start"
                />
            ) : (
                <button
                    className="w-full text-left text-lg font-bold cursor-pointer self-start"
                    onClick={() => setIsEditing(true)}
                >
                    {deckName}
                </button>
            )}

            <div className="min-h-40 min-w-64 flex gap-4 justify-center items-center">
                {data.map((card: ICardProps) => (
                    <Card
                        data={card}
                        isSelected={selectedPokemon.name === card.name}
                        key={card.name}
                        onClick={() => handleCardClick(card.name, card.image)}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        onDragStart={(e) => onDragStart(e, card)}
                    />
                ))}
            </div>
        </div>
    );
};
