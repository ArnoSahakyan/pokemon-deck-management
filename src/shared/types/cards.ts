export type TCardProps = {
    name: string;
    image: string;
    fromNewStack?: boolean;
}

export type TSelectedCardProps = {
    name: string;
    image: string;
    abilities: {
        ability: {
            name: string;
        }
    }[],
    base_experience: number,
    height: number,
    weight: number,
}