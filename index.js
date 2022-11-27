import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import storeRoutes from "./routes/storeRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(express.json());
dotenv.config(); //Buscar dentro del archivo de variables de entorno

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/store", storeRoutes);
app.use("/api/inventory", productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Desde el puerto ${PORT} el frontend`);
});