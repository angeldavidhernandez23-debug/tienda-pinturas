const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  marca: String,
  color: String,
  categoria: String,
  precio: Number,
  stock: Number
});

module.exports = mongoose.model("Producto", ProductoSchema);