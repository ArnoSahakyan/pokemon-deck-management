import { FC } from "react";

interface IAbilityTagProps {
  ability: string;
}

export const AbilityTag: FC<IAbilityTagProps> = ({ ability }) => {
  return (
    <div className="px-2 rounded-lg shadow-md border-gray-200 border-2">
      <p className="text-[10px] font-bold">{ability}</p>
    </div>
  );
};
