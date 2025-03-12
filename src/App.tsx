import React from 'react';
import './App.css';
import {PokemonProvider} from "./context";
import {Main} from "./pages";

function App() {
    return (
        <PokemonProvider>
            <Main/>
        </PokemonProvider>
    );
}

export default App;
