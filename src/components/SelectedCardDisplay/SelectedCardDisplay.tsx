import {TSelectedCardProps} from "../../shared/types";
import {AbilityTag} from "./components/AbilityTag";

type SelectedCardDisplayProps = {
    data: TSelectedCardProps;
    loading?: boolean;
};

export const SelectedCardDisplay = ({
                                        data,
                                        loading,
                                    }: SelectedCardDisplayProps) => {
    if (loading) {
        return (
            <div
                className="w-[360px] flex flex-col items-center justify-center bg-white rounded-lg p-4 gap-5 shadow-md border-gray-200 border-2">
                <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"/>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full h-6 bg-gray-200 animate-pulse rounded"/>
                    <div className="w-full h-6 bg-gray-200 animate-pulse rounded"/>
                </div>
            </div>
        );
    }

    return (
        <div
            className="w-[360px] flex flex-col items-center justify-center bg-white rounded-lg p-4 gap-5 shadow-md border-gray-200 border-2">
            <img
                src={data.image}
                alt={data.name}
                className="object-cover object-center w-full select-none pointer-events-none"
            />
            <div className="w-full flex flex-col">
                <div className="w-full flex items-center gap-2">
                    <p className="text-lg font-bold leading-none">{data.name}</p>
                    <div className="flex items-center gap-1">
                        {data.abilities.slice(0, 2).map((ability, index) => (
                            <AbilityTag key={index} ability={ability.ability.name}/>
                        ))}
                        {data.abilities.length > 2 && <span>...</span>}
                    </div>
                    <p className="text-gray-400 text-lg font-black ml-auto">
                        <span className="text-sm">#</span>
                        {data.base_experience}
                    </p>
                </div>
                <div className="flex items-center gap-8 self-start">
                    <p className="text-gray-400 text-lg font-black ml-auto">
                        {data.weight}
                        <span className="text-sm">KG</span>
                    </p>
                    <p className="text-gray-400 text-lg font-black ml-auto">
                        {data.height}
                        <span className="text-sm">CM</span>
                    </p>
                </div>
            </div>
        </div>
    );
};