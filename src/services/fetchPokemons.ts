import { handler } from './api-handler';

const fetchRandomPokemons = async () =>
    handler({
        query: `
      query {
        pokemons(limit: 10) {
          results {
            name
            image
          }
        }
      }
    `,
    });

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
