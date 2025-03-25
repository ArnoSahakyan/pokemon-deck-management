export const handler = async ({
  query,
  restParams = {},
}: {
  query: string;
  restParams?: { [key: string]: unknown };
}) => {
  const response = await fetch(
    "https://graphql-pokeapi.vercel.app/api/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      ...restParams,
    }
  );

  return response.json();
};
