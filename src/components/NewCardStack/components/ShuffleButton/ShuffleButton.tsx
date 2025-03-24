import {FC} from "react";
import {IButtonProps} from "../../../../shared";

export const ShuffleButton: FC<IButtonProps> = ({ onClick, disabled }) => {
  return (
    <button className="w-20 h-20 rounded-full bg-white p-4 border-2 cursor-pointer transition border-gray-300 active:border-blue-500 disabled:bg-gray-300 disabled:border-gray-200 disabled:cursor-not-allowed" onClick={onClick}
            disabled={disabled}>
      <img src="/shuffle.svg" alt="shuffle" className="w-full h-full object-cover object-center" />
    </button>
  );
};
