const api = require("../../../services/api");

class ListPokemosnUseCase {
  pokemons = [];

  async list(url) {
    let list = await api.get(url);

    return list;
  }
}

module.exports = ListPokemosnUseCase;