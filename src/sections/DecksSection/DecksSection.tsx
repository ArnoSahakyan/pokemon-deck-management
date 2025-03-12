import React from "react";
import {TCardProps} from "../../shared/types";
import {Deck} from "../../components";

type DecksSectionProps = {
    deck1: TCardProps[];
    deck2: TCardProps[];
    handleDrop: (deckNumber: number, card: TCardProps) => void;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, card: TCardProps) => void;
};

export const DecksSection = ({
                                 deck1,
                                 deck2,
                                 handleDrop,
                                 onDragStart,
                             }: DecksSectionProps) => {
    return (
        <div className="py-12 flex justify-center gap-4">
            <Deck
                data={deck1}
                onDrop={(card) => handleDrop(1, card)}
                onDragStart={onDragStart}
            />
            <Deck
                data={deck2}
                onDrop={(card) => handleDrop(2, card)}
                onDragStart={onDragStart}
            />
        </div>
    );
};