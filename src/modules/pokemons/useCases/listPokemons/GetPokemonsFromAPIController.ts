import { Request, Response } from "express";
import { GetPokemonsFromAPIUseCase } from "./GetPokemonsFromAPIUseCase";

class GetPokemonsFromAPIController {
  async handle(request: Request, response: Response): Promise<Response> {

    const getPokemonsFromAPIUseCase = new GetPokemonsFromAPIUseCase();

    const allPokemons = await getPokemonsFromAPIUseCase.execute();

    return response.json({ pokemons: allPokemons });
  }
}

export { GetPokemonsFromAPIController };