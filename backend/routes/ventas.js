const express = require("express");
const router = express.Router();

const Venta = require("../models/Venta");
const Producto = require("../models/Producto");

// ================= CREAR VENTA =================
router.post("/", async (req, res) => {

  try {

    // Guardar venta
    const nueva = new Venta(req.body);
    await nueva.save();

    // DESCONTAR STOCK
    for (const item of req.body.productos) {

      await Producto.findByIdAndUpdate(
        item.id,
        {
          $inc: {
            stock: -item.cantidad
          }
        }
      );

    }

    res.json({
      mensaje: "Venta guardada y stock actualizado"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Error al guardar venta"
    });

  }

});

// ================= OBTENER VENTAS =================
router.get("/", async (req, res) => {

  const ventas = await Venta.find();
  res.json(ventas);

});

// ================= ELIMINAR =================
router.delete("/:id", async (req, res) => {

  await Venta.findByIdAndDelete(req.params.id);

  res.json({
    mensaje: "Eliminado"
  });

});

// ================= EDITAR =================
router.put("/:id", async (req, res) => {

  await Venta.findByIdAndUpdate(req.params.id, req.body);

  res.json({
    mensaje: "Actualizado"
  });

});

module.exports = router;