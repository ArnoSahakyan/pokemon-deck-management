import { handler } from './api-handler';
import {POKEMONS_LIMIT, TOTAL_POKEMONS} from "../shared";

const fetchRandomPokemons = async () => {
    const offset = Math.floor(Math.random() * (TOTAL_POKEMONS - POKEMONS_LIMIT));

    return handler({
        query: `
            query {
                pokemons(limit: ${POKEMONS_LIMIT}, offset: ${offset}) {
                    results {
                        name
                        image
                    }
                }
            }
        `,
    });
};

const fetchPokemonDetails = async (name: string) =>
    handler({
        query: `
      query {
        pokemon(name: "${name}") {
          name
          height
          weight
          base_experience
          abilities {
            ability {
              name
            }
          }
        }
      }
    `,
    });

export { fetchPokemonDetails, fetchRandomPokemons };
