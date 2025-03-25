import React, { FC } from "react";
import { ShuffleButton } from "./components";
import { useDecksStore, usePokemonStore } from "../../store";

interface INewCardStackProps {
  children: React.JSX.Element;
}

export const NewCardStack: FC<INewCardStackProps> = ({ children }) => {
  const { getPokemons, resetPokemons, isLoading } = usePokemonStore(
    (state) => state
  );
  const resetDecks = useDecksStore((state) => state.resetDecks);

  const shuffleCards = () => {
    resetPokemons();
    resetDecks();
    getPokemons();
  };

  return (
    <div className="flex items-start gap-4">
      <div className="min-w-36 h-56 bg-gray-100 p-4 rounded-br-lg">
        <p className="text-lg font-bold text-center">Card Stack</p>
        <div className="flex gap-4 justify-center items-center">{children}</div>
      </div>
      <div className="pt-4">
        <ShuffleButton onClick={shuffleCards} disabled={isLoading} />
      </div>
    </div>
  );
};
