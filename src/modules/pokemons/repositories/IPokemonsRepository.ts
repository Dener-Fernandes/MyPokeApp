import { ICreatePokemonDTO } from "../dtos/ICreatePokemonDTO";
import { Pokemon } from "../infra/entities/Pokemon";

interface IPokemonsRepository {
  create({ name, image }: ICreatePokemonDTO): Pokemon;
}

export { IPokemonsRepository };