export interface PokemonContextType {
    selectedPokemon: {
        name: string;
        image: string;
    };
    handleCardClick: (name: string, image: string) => void;
}
