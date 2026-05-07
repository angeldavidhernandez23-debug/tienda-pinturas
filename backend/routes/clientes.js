const express = require("express");
const router = express.Router();
const Cliente = require("../models/Cliente");

// Crear
router.post("/", async (req, res) => {
  const nuevo = new Cliente(req.body);
  await nuevo.save();
  res.json(nuevo);
});

// Leer
router.get("/", async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

// Eliminar
router.delete("/:id", async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Eliminado" });
});

// Editar
router.put("/:id", async (req, res) => {
  await Cliente.findByIdAndUpdate(req.params.id, req.body);
  res.json({ mensaje: "Actualizado" });
});

module.exports = router;