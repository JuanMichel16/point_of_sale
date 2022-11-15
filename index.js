import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config(); //Buscar dentro del archivo de variables de entorno

connectDB();

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Desde el puerto ${PORT} el frontend`);
});