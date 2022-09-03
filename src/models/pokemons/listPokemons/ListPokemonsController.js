class LisPokemonsController {
  async handle(request, response) {
    const ListPokemonsUseCase = require("./ListPokemonsUseCase");
    const urlAllPokemons = "/pokemon?limit=10&offset=0";
    const allPokemonsInfo = [];

    const listPokemonsUseCase = new ListPokemonsUseCase();

    const allPokemons = await listPokemonsUseCase.list(urlAllPokemons);

    for (let i = 0; i < allPokemons.data.results.length; i++) {
      let id = allPokemons.data.results[i].url.split("/");
      const urlPokemonInfo = `/pokemon-form/${id[id.length - 2]}`;

      let pokemon = await listPokemonsUseCase.list(urlPokemonInfo);

      allPokemonsInfo.push({
        pokemon_id: pokemon.data.id,
        pokemon_name: pokemon.data.pokemon.name,
        pokemon_image: pokemon.data.sprites.front_default,
      });
    };

    return response.json({ pokemons: allPokemonsInfo });
  }
}

module.exports = LisPokemonsController;