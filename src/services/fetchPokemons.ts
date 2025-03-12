export const fetchRandomPokemons = async () => {
    const query = `
    query {
      pokemons(limit: 10) {
        results {
          name
          image
        }
      }
    }
  `;

    const response = await fetch("https://graphql-pokeapi.vercel.app/api/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({query}),
    });

    return response.json();
};

export const fetchPokemonDetails = async (name: string) => {
    const query = `
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
    `;

    const response = await fetch("https://graphql-pokeapi.vercel.app/api/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    return response.json();
};
