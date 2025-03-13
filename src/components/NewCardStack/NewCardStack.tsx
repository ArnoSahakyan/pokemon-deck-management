import React, { FC } from 'react';

interface INewCardStackProps {
    children: React.JSX.Element;
}

export const NewCardStack: FC<INewCardStackProps> = ({ children }) => {
    return (
        <div className="min-w-40 bg-gray-100 p-4 rounded-lg">
            <p className="text-lg font-bold text-center">Card Stack</p>
            <div className="flex gap-4 justify-center items-center">{children}</div>
        </div>
    );
};
