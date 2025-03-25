export interface ICardProps {
  name: string;
  image: string;
  fromNewStack?: boolean;
}

export interface ISelectedCardProps {
  name: string;
  image: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  base_experience: number;
  height: number;
  weight: number;
}
