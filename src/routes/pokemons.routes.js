const express = require("express");

const ListPokemonsController = require("../models/pokemons/listPokemons/ListPokemonsController");

const listPokemonsController = new ListPokemonsController();

const pokemonsRoutes = express.Router();

pokemonsRoutes.get("/", listPokemonsController.handle);

module.exports = pokemonsRoutes;