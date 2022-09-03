const api = require("../../../services/api");

class GetPokemonsFromAPIUseCase {

  async execute() {
    let list = await api.get("/pokemon?limit=10&offset=0");
    const allPokemonsInfo = [];
    for (let i = 0; i < list.data.results.length; i++) {
      let id = list.data.results[i].url.split("/");
      const urlPokemonInfo = `/pokemon-form/${id[id.length - 2]}`;

      let pokemon = await api.get(urlPokemonInfo);

      allPokemonsInfo.push({
        pokemon_id: pokemon.data.id,
        pokemon_name: pokemon.data.pokemon.name,
        pokemon_image: pokemon.data.sprites.front_default,
      });
    };

    return allPokemonsInfo;
  }
}

module.exports = GetPokemonsFromAPIUseCase;