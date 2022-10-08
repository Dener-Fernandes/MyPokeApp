import { ICreatePokemonDTO } from "../../dtos/ICreatePokemonDTO";
import { Pokemon } from "../../infra/entities/Pokemon";
import { IPokemonsRepository } from "../IPokemonsRepository";

class PokemonsRepositoryInMemory implements IPokemonsRepository {

  private pokemons: Pokemon[];

  private static INSTANCE: PokemonsRepositoryInMemory;

  constructor() {
    this.pokemons = [];
  }

  static getInstance() {
    if (!PokemonsRepositoryInMemory.INSTANCE) {
      PokemonsRepositoryInMemory.INSTANCE = new PokemonsRepositoryInMemory();
    }
    return PokemonsRepositoryInMemory.INSTANCE;
  }

  create({
    name,
    image
  }: ICreatePokemonDTO): Pokemon {
    const pokemon = new Pokemon();

    Object.assign(pokemon, {
      name,
      image,
    });

    this.pokemons.push(pokemon);

    return pokemon;
  }

}

export { PokemonsRepositoryInMemory };