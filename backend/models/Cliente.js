const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  direccion: String
});

module.exports = mongoose.model("Cliente", ClienteSchema);