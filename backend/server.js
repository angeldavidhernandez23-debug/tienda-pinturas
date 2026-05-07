const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// 👇 IMPORTAR TODAS LAS RUTAS
const clientesRoutes = require("./routes/clientes");
const productosRoutes = require("./routes/productos");
const ventasRoutes = require("./routes/ventas");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 👇 MOSTRAR CARPETA PUBLIC
app.use(express.static(path.join(__dirname, "public")));

// 🔗 Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB Atlas ✅"))
  .catch(err => console.log("Error de conexión ❌", err));

// 👇 RUTAS API
app.use("/clientes", clientesRoutes);
app.use("/productos", productosRoutes);
app.use("/ventas", ventasRoutes);

// 👇 ABRIR INDEX.HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Levantar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});