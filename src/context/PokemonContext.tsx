import React, {createContext, useState, useContext} from "react";
import {PokemonContextType} from "../shared/types/context";

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemon must be used within a PokemonProvider");
    }
    return context;
};

export const PokemonProvider = ({children}: { children: React.JSX.Element }) => {
    const [selectedPokemon, setSelectedPokemon] = useState({name: "", image: ""});

    const handleCardClick = (name: string, image: string) => {
        setSelectedPokemon({name, image});
    };

    return (
        <PokemonContext.Provider value={{selectedPokemon, handleCardClick}}>
            {children}
        </PokemonContext.Provider>
    );
};
