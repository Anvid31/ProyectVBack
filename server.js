import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { conexion } from "./db/conexion.js";
import rutas from "./routes/rutas.js";

var app = express();
dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
rutas(app);

conexion()
  .then(() => {
    app.listen(port, host, () => {
      console.log(`Escuchando por el puerto ${port} `);
    });
  })

  .catch((err) => {
    console.error("Error al conectar con DB", err);
    process.exit(1);
  });
