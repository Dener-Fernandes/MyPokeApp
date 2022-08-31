const express = require("express");
const router = express.Router();

const pokemonsRoutes = require("./pokemons.routes");

router.use("/pokemons", pokemonsRoutes);

module.exports = router;