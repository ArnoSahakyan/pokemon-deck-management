import React from "react";
import { ICardProps } from "../../../../shared";
import { Deck } from "../../../../components";
import { useDecksStore, usePokemonStore } from "../../../../store";

export const DecksSection = () => {
  const { decks } = useDecksStore((state) => state);

  const handleCardDrop = usePokemonStore((state) => state.handleCardDrop);

  return (
    <div className="py-4 flex justify-center gap-2">
      {decks.map((deck: ICardProps[], index: number) => {
        return (
          <Deck
            key={index}
            data={deck}
            onDrop={(card) => handleCardDrop(index + 1, card)}
          />
        );
      })}
    </div>
  );
};
