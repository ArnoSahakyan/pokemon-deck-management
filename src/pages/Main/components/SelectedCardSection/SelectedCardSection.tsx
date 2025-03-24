import { usePokemonStore } from '../../../../store';
import { SelectedCardDisplay } from '../../../../components';

export const SelectedCardSection = () => {
  const { focusedPokemon } = usePokemonStore((state) => state);

  return (
    <>
      {focusedPokemon ? (
        <div className="h-[450px] flex justify-center items-center">
          <SelectedCardDisplay />
        </div>
      ) : (
        <div className="h-[450px]" />
      )}
    </>
  );
};
