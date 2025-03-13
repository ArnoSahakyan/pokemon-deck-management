import React, { FC } from 'react';
import { ICardProps } from '../../../../shared/types';
import { Deck } from '../../../../components';

interface IDecksSectionProps {
    deck1: ICardProps[];
    deck2: ICardProps[];
    handleDrop: (deckNumber: number, card: ICardProps) => void;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, card: ICardProps) => void;
}

export const DecksSection: FC<IDecksSectionProps> = ({ deck1, deck2, handleDrop, onDragStart }) => {
    return (
        <div className="py-4 flex justify-center gap-4">
            <Deck data={deck1} onDrop={(card) => handleDrop(1, card)} onDragStart={onDragStart} />
            <Deck data={deck2} onDrop={(card) => handleDrop(2, card)} onDragStart={onDragStart} />
        </div>
    );
};
