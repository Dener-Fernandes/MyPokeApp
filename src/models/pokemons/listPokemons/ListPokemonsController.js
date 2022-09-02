class LisPokemonsController {
  async handle(request, response) {
    const ListPokemonsUseCase = require("./ListPokemonsUseCase");

    const listPokemonsUseCase = new ListPokemonsUseCase();

    const allPokemons = await listPokemonsUseCase.list();


    return response.json({ pokemons: allPokemons.data.results });
  }
}

module.exports = LisPokemonsController;