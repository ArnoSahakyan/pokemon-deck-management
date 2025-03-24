import React, { DragEventHandler, FC } from 'react';
import {capitalizedCardName, ICardProps} from "../../shared";

interface ICardComponentProps {
    data: ICardProps;
    onClick: () => void;
    isSelected: boolean;
    onDragStart: (e: DragEventHandler<HTMLDivElement>, card: ICardProps) => void;
    onDragEnd?: (e: DragEventHandler<HTMLDivElement>) => void;
}

export const Card: FC<ICardComponentProps> = (props) => {
    const { data, isSelected, ...restProps } = props;

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <button
            className={`p-4 border-2 rounded-lg cursor-pointer ${
                isSelected ? 'border-blue-500' : 'border-gray-300'
            }`}
            draggable
            {...restProps}
        >
            <img src={data.image} alt={data.name} className="select-none pointer-events-none w-24 h-24" />
            <p className="text-center mt-2">{capitalizedCardName(data.name)}</p>
        </button>
    );
};