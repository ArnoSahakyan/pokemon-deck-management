import React from 'react';
import { PokemonProvider } from './context';
import { Main } from './pages';

function App() {
    return (
        <PokemonProvider>
            <Main />
        </PokemonProvider>
    );
}

export default App;
