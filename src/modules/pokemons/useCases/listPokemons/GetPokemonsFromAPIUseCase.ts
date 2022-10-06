import { Pokemon } from "modules/pokemons/infra/entities/Pokemon";
import { api } from "../../../../services/api";

interface IRequest {
  id: number;
  pokemon: {
    name: string
  };
  sprites: {
    front_default: string;
  };
}

class GetPokemonsFromAPIUseCase {

  constructor() { };

  async execute(): Promise<Pokemon[]> {
    let list = await api.get("/pokemon?limit=10&offset=0");

    const allPokemonsInfo: Pokemon[] = [];

    for (let i = 0; i < list.data.results.length; i++) {
      let id = list.data.results[i].url.split("/");
      const urlPokemonInfo = `/pokemon-form/${id[id.length - 2]}`;

      let pokemon = await api.get<IRequest>(urlPokemonInfo);

      allPokemonsInfo.push({
        id: pokemon.data.id,
        name: pokemon.data.pokemon.name,
        image: pokemon.data.sprites.front_default,
      });
    };

    return allPokemonsInfo;
  }
}

export { GetPokemonsFromAPIUseCase };