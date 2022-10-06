import { Router } from "express";
const router = Router();

import { pokemonsRoutes } from "./pokemons.routes";

router.use("/pokemons", pokemonsRoutes);

export { router };