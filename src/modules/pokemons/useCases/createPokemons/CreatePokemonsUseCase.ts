import { Pokemon } from "../../infra/entities/Pokemon";
import { IPokemonsRepository } from "../../repositories/IPokemonsRepository";

interface IRequest {
  name: string;
  image: string;
}

class CreatePokemonsUseCase {

  constructor(private pokemonsRepositoryInMemory: IPokemonsRepository) { };

  async execute({ name, image }: IRequest): Promise<Pokemon> {
    const pokemon = await this.pokemonsRepositoryInMemory.create({ name, image });
    return pokemon;
  }
}

export { CreatePokemonsUseCase };