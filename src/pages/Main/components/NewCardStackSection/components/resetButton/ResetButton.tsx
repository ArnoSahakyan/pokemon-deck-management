import { FC } from 'react';

interface IResetButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const ResetButton: FC<IResetButtonProps> = ({ onClick, disabled }) => {
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
