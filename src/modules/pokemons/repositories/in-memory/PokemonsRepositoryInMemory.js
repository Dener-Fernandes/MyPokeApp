class PokemonsRepositoryInMemory {
  static INSTANCE = null;
  pokemons;

  constructor() {
    this.pokemons = [];
  }

  static getInstance() {
    if (!PokemonsRepositoryInMemory.INSTANCE) {
      PokemonsRepositoryInMemory.INSTANCE = new PokemonsRepositoryInMemory();
    }
    return PokemonsRepositoryInMemory.INSTANCE;
  }

  async create({
    pokemon_id,
    pokemon_name,
    pokemon_image
  }) {
    const pokemon = {
      pokemon_id,
      pokemon_name,
      pokemon_image,
    }


  }

}

module.exports = PokemonsRepositoryInMemory;