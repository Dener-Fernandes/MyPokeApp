import express from "express";

import { GetPokemonsFromAPIController } from "../modules/pokemons/useCases/getPokemonsFromAPI/GetPokemonsFromAPIController";

const getPokemonsFromAPIController = new GetPokemonsFromAPIController();

const pokemonsRoutes = express.Router();

pokemonsRoutes.get("/", getPokemonsFromAPIController.handle);

export { pokemonsRoutes };