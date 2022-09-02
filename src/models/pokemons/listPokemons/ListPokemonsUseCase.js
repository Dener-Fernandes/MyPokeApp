const api = require("../../../services/api");

class ListPokemosnUseCase {
  pokemons = [];

  async list() {
    let list = await api.get("/pokemon?limit=10&offset=0");
    let allPokemons = [];

    for (let i = 0; i < list.data.results.length; i++) {
      let id = list.data.results[i].url.split("/");
      let pokemon = await api.get(`/pokemon-form/${id[id.length - 2]}`);
      allPokemons.push({
        pokemon_id: pokemon.data.id,
        pokemon_name: pokemon.data.pokemon.name,
        pokemon_image: pokemon.data.sprites.front_default,
      });
    };

    return allPokemons;
  }
}

module.exports = ListPokemosnUseCase;