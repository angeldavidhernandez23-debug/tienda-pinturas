const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 👇 IMPORTAR TODAS LAS RUTAS
const clientesRoutes = require("./routes/clientes");
const productosRoutes = require("./routes/productos");
const ventasRoutes = require("./routes/ventas");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔗 Conexión a MongoDB Atlas
mongoose.connect("mongodb+srv://angeldavidhernandez23_db_user:david980@cluster0.rvynwvf.mongodb.net/tienda?retryWrites=true&w=majority")
  .then(() => console.log("Conectado a MongoDB Atlas ✅"))
  .catch(err => console.log("Error de conexión ❌", err));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// 👇 USAR TODAS LAS RUTAS
app.use("/clientes", clientesRoutes);
app.use("/productos", productosRoutes);
app.use("/ventas", ventasRoutes);

// Levantar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});