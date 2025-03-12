import React, {useState} from "react";
import {Card} from "../Card";
import {TCardProps} from "../../shared/types";
import {usePokemon} from "../../context";

type DeckProps = {
    data: TCardProps[];
    onDrop: (card: TCardProps) => void;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, card: TCardProps) => void;
};

export const Deck = ({
                         data,
                         onDrop,
                         onDragStart,
                     }: DeckProps) => {
    const {selectedPokemon, handleCardClick} = usePokemon();
    const [deckName, setDeckName] = useState("Deck Name");
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeckName(e.target.value);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const cardData = JSON.parse(e.dataTransfer.getData("card"));
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
                    autoFocus
                    placeholder="Untitled Deck"
                    className="border-none outline-none bg-transparent text-lg font-bold self-start"
                />
            ) : (
                <p
                    className="text-lg font-bold cursor-pointer self-start"
                    onClick={() => setIsEditing(true)}
                >
                    {deckName}
                </p>
            )}

            <div className="min-h-40 min-w-56 flex gap-4 justify-center items-center">
                {data.map((card: TCardProps) => (
                    <Card
                        key={card.name}
                        data={card}
                        onClick={() => handleCardClick(card.name, card.image)}
                        isSelected={selectedPokemon.name === card.name}
                        onDragStart={(e) => onDragStart(e, card)}
                    />
                ))}
            </div>
        </div>
    );
};