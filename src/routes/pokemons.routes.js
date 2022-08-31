const express = require("express");

const pokemonsRoutes = express.Router();

pokemonsRoutes.get("/", (req, res) => {
  return res.json({ message: "Hello" });
});

module.exports = pokemonsRoutes;