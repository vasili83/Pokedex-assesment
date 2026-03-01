export const endpoints = (request:any) => ({
  loadAllFreePokemons: () => request("/Pokemon"),
  loadPokemonById: (id: number) => request(`/Pokemon/${id}`),
  loadPokedex: () => request("/Pokemon/pokedex"),
  addPokemonToDex: (id: number) => request(`/Pokemon/${id}/pokedex`, { method: "POST" }),
  removePokemonFromDex: (id: number) => request(`/Pokemon/${id}/pokedex`, { method: "DELETE" }),
});