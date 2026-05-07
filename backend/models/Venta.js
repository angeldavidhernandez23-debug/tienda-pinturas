const mongoose = require("mongoose");

const VentaSchema = new mongoose.Schema({

  cliente: String,

  productos: [
    {
      id: String,
      producto: String,
      marca: String,
      color: String,
      cantidad: Number,
      precio: Number
    }
  ],

  total: Number,

  fecha: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Venta", VentaSchema);