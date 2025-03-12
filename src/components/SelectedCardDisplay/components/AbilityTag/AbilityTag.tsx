type AbilityTagProps = {
    ability: string;
}

export const AbilityTag = ({ability}: AbilityTagProps) => {
    return (
        <div className="px-2 rounded-lg shadow-md border-gray-200 border-2">
            <p className="text-[10px] font-bold">
                {ability}
            </p>
        </div>
    );
}