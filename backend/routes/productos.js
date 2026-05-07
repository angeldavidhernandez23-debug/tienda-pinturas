const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto");

// CREAR
router.post("/", async (req, res) => {
  const nuevo = new Producto(req.body);
  await nuevo.save();
  res.json(nuevo);
});

// LEER
router.get("/", async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

// ELIMINAR
router.delete("/:id", async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Eliminado" });
});

// EDITAR
router.put("/:id", async (req, res) => {
  await Producto.findByIdAndUpdate(req.params.id, req.body);
  res.json({ mensaje: "Actualizado" });
});

module.exports = router;