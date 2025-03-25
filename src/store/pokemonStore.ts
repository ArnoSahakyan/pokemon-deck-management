import { create } from "zustand";
import { ICardProps, ISelectedCardProps } from "../shared";
import { fetchPokemonDetails, fetchRandomPokemons } from "../services";
import { useDecksStore } from "./deckStore";

interface IPokemonState {
  pokemons: ICardProps[];
  storedPokemons: ICardProps[];
  focusedPokemon: ISelectedCardProps | null;
  isLoading: boolean;
  isFetchingDetails: boolean;
  getPokemons: () => void;
  getFocusedPokemon: (name: string, image: string) => void;
  resetPokemons: () => void;
  handleDragStart: (e: DragEvent, card: ICardProps) => void;
  handleCardDrop: (deckNumber: number, card: ICardProps) => void;
}

export const usePokemonStore = create<IPokemonState>((set, get) => ({
  pokemons: [],
  storedPokemons: [],
  focusedPokemon: null,
  isLoading: true,
  isFetchingDetails: false,

  getPokemons: async () => {
    set({ isLoading: true });
    try {
      const response = await fetchRandomPokemons();
      set({
        pokemons: response.data.pokemons.results,
        storedPokemons: response.data.pokemons.results,
      });
    } catch (err) {
      console.error("Failed to fetch Pokémon data");
    } finally {
      set({ isLoading: false });
    }
  },

  getFocusedPokemon: async (name, image) => {
    const { focusedPokemon } = get();
    if (focusedPokemon?.name === name) return;

    set({ isFetchingDetails: true });
    try {
      const response = await fetchPokemonDetails(name);
      set({ focusedPokemon: { ...response.data.pokemon, image } });
    } catch (err) {
      console.error("Failed to fetch Pokémon details");
    } finally {
      set({ isFetchingDetails: false });
    }
  },

  resetPokemons: () => {
    set({ pokemons: get().storedPokemons, focusedPokemon: null });
  },

  handleDragStart: (e: DragEvent, card: ICardProps) => {
    const { focusedPokemon, getFocusedPokemon } = get();
    if (focusedPokemon?.name !== card.name) {
      getFocusedPokemon(card.name, card.image);
    }
    e.dataTransfer?.setData("card", JSON.stringify(card));
  },

  handleCardDrop: (deckNumber: number, card: ICardProps) => {
    const { pokemons } = get();
    const { handleDrop } = useDecksStore.getState();

    if (pokemons.some((p) => p.name === card.name)) {
      set((state) => ({
        pokemons: state.pokemons.filter((p) => p.name !== card.name),
      }));
    }

    handleDrop(deckNumber, card);
  },
}));
