const express = require("express");

const GetPokemonsFromAPIController = require("../models/pokemons/listPokemons/GetPokemonsFromAPIController");

const getPokemonsFromAPIController = new GetPokemonsFromAPIController();

const pokemonsRoutes = express.Router();

pokemonsRoutes.get("/", getPokemonsFromAPIController.handle);

module.exports = pokemonsRoutes;