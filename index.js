console.clear();
import { users } from "./ddbb.js";
//libreria para crear server
import express from "express";

//Importar libreria de dotenv
import dotenv from "dotenv";

dotenv.config();

//leer .env
process.env.PORT;

//estancia tipo server
const expressApp = express();

//parcear body
expressApp.use(express.json());
expressApp.use(express.text());

//Obtener los detalles de una cuenta

//Crear una Cuenta

//Actualizar una Cuenta

//Eliminar una Cuenta

//inicializa el server en un puerto
expressApp.listen(PORT, () =>
  console.log(`Servidor levantado en el puerto ${PORT}`)
);
