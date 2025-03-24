import { create } from 'zustand';
import { ICardProps } from '../shared';
import { initialDecks } from '../shared';

interface DecksStore {
  decks: ICardProps[][];
  handleDrop: (deckNumber: number, card: ICardProps) => void;
  resetDecks: () => void;
}

export const useDecksStore = create<DecksStore>((set) => ({
  decks: initialDecks,
  handleDrop: (deckNumber, card) =>
    set((state) => ({
      decks: state.decks
        .map((deck) => deck.filter((c) => c.name !== card.name))
        .map((deck, index) => (index + 1 === deckNumber ? [...deck, card] : deck)),
    })),
  resetDecks: () => set({ decks: initialDecks }),
}));
