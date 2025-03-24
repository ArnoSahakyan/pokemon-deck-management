import React, { FC } from 'react';
import { ShuffleButton } from './components';

interface INewCardStackProps {
    children: React.JSX.Element;
}

export const NewCardStack: FC<INewCardStackProps> = ({ children }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="min-w-44 h-56 bg-gray-100 p-4 rounded-br-lg">
                <p className="text-lg font-bold text-center">Card Stack</p>
                <div className="flex gap-4 justify-center items-center">{children}</div>
            </div>
            <div className="pt-4">
                <ShuffleButton />
            </div>
        </div>
    );
};