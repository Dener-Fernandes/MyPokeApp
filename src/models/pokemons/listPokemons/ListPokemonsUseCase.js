const api = require("../../../services/api");

class ListPokemosnUseCase {
  pokemons = [];

  async list() {
    const list = await api.get("/pokemon?limit=150&offset=0");
    return list;
  }
}

module.exports = ListPokemosnUseCase;