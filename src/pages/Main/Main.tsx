import { DecksSection, NewCardStackSection, SelectedCardSection } from './components';

export const Main = () => {
    return (
        <main className="flex flex-col justify-between w-full">
            <NewCardStackSection />

            <SelectedCardSection />

            <DecksSection />
        </main>
    );
};