import {useState} from "react";
import {TCardProps} from "../shared/types";

export const useDecks = () => {
    const [deck1, setDeck1] = useState<TCardProps[]>([]);
    const [deck2, setDeck2] = useState<TCardProps[]>([]);

    const handleDrop = (deckNumber: number, card: TCardProps) => {
        setDeck1((prevDeck1) => prevDeck1.filter((c) => c.name !== card.name));
        setDeck2((prevDeck2) => prevDeck2.filter((c) => c.name !== card.name));

        if (deckNumber === 1) {
            setDeck1((prevDeck1) => [...prevDeck1, card]);
        } else if (deckNumber === 2) {
            setDeck2((prevDeck2) => [...prevDeck2, card]);
        }
    };

    return {
        deck1,
        deck2,
        handleDrop,
    };
};