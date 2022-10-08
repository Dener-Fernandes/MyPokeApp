import { Request, Response } from "express";
import { PokemonsRepositoryInMemory } from "../../repositories/in-memory/PokemonsRepositoryInMemory";
import { CreatePokemonsUseCase } from "./CreatePokemonsUseCase";


class CreatePokemonsController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { name, image } = request.body;

    const pokemonsRepositoryInMemory = new PokemonsRepositoryInMemory();

    const createPokemonsUseCase = new CreatePokemonsUseCase(pokemonsRepositoryInMemory);

    const pokemon = await createPokemonsUseCase.execute({ name, image });

    return response.status(201).json(pokemon);

  }
}

export { CreatePokemonsController };