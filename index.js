import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import storeRoutes from "./routes/storeRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import providerRoutes from "./routes/providerRoutes.js";
import saleRoutes from "./routes/saleRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();
app.use(express.json());
dotenv.config(); //Buscar dentro del archivo de variables de entorno

connectDB();

var whitelist = [`${process.env.FRONTEND_URL}`]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS'))
    }
  }
}

app.use(cors(corsOptions));

app.use("/api/users", userRoutes);
app.use("/api/store", storeRoutes);
app.use("/api/inventory", productRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/sale", saleRoutes);
app.use("/api/reports", reportRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Desde el puerto ${PORT} el frontend`);
});