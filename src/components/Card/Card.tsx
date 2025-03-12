import React from "react";
import {TCardProps} from "../../shared/types";

type CardProps = {
    data: TCardProps;
    onClick: () => void;
    isSelected: boolean;
    onDragStart?: (e: React.DragEvent<HTMLDivElement>, card: TCardProps) => void;
    onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const Card = ({
                         data,
                         onClick,
                         isSelected,
                         onDragStart,
                         onDragEnd,
                     }: CardProps) => {
    return (
        <div
            className={`p-4 border-2 rounded-lg cursor-pointer ${
                isSelected ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={onClick}
            draggable
            onDragStart={(e) => onDragStart && onDragStart(e, data)}
            onDragEnd={(e) => onDragEnd && onDragEnd(e)}
        >
            <img src={data.image} alt={data.name} className="w-full h-auto select-none pointer-events-none"/>
            <p className="text-center mt-2">{data.name}</p>
        </div>
    );
};