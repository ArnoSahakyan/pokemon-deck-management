import { FC } from 'react';
import {IButtonProps} from "../../../../../../shared";

export const ResetButton: FC<IButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      className="bg-white px-4 py-2 rounded-lg font-semibold border-2 uppercase cursor-pointer transition border-gray-300 active:border-blue-500 disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      reset
    </button>
  );
};
