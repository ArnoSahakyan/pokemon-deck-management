import { AbilityTag } from "./components/AbilityTag";
import { usePokemonStore } from "../../store";
import { capitalizedCardName } from "../../shared";

export const SelectedCardDisplay = () => {
  const { focusedPokemon, isFetchingDetails } = usePokemonStore(
    (state) => state
  );

  if (isFetchingDetails) {
    return (
      <div className="w-[360px] flex flex-col items-center justify-center bg-white rounded-lg p-4 gap-5 shadow-md border-gray-200 border-2">
        <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />
        <div className="w-full flex flex-col gap-4">
          <div className="w-full h-5 bg-gray-200 animate-pulse rounded" />
          <div className="w-full h-5 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
    );
  }

  return (
    focusedPokemon && (
      <div className="w-[360px] flex flex-col items-center justify-center bg-white rounded-lg p-4 gap-5 shadow-md border-gray-200 border-2">
        <img
          src={focusedPokemon.image}
          alt={focusedPokemon.name}
          className="object-contain object-center w-full h-64 select-none pointer-events-none"
        />
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center gap-2">
            <p className="text-lg font-bold leading-none">
              {capitalizedCardName(focusedPokemon.name)}
            </p>
            <div className="flex items-center gap-1">
              {focusedPokemon.abilities.slice(0, 2).map((ability, index) => (
                <AbilityTag key={index} ability={ability.ability.name} />
              ))}
              {focusedPokemon.abilities?.length > 2 && <span>...</span>}
            </div>
            <p className="text-gray-400 text-lg font-black ml-auto">
              <span className="text-sm">#</span>
              {focusedPokemon.base_experience}
            </p>
          </div>
          <div className="flex items-center gap-8 self-start">
            <p className="text-gray-400 text-lg font-black ml-auto">
              {focusedPokemon.weight}
              <span className="text-sm">KG</span>
            </p>
            <p className="text-gray-400 text-lg font-black ml-auto">
              {focusedPokemon.height}
              <span className="text-sm">CM</span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};
