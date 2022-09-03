class GetPokemonsFromAPIController {
  async handle(request, response) {
    const GetPokemonsFromAPIUseCase = require("./GetPokemonsFromAPIUseCase");

    const getPokemonsFromAPIUseCase = new GetPokemonsFromAPIUseCase();

    const allPokemons = await getPokemonsFromAPIUseCase.execute();

    return response.json({ pokemons: allPokemons });
  }
}

module.exports = GetPokemonsFromAPIController
  ;