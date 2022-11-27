import isAuth from "../middleware/authMiddleware.js";

import express from "express";
const router = express.Router();

import {  
    getInventory,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
} from "../controllers/inventoryController.js";


//Inventario general
router.route("/").get(isAuth, getInventory).post(isAuth, addProduct);

// Productos en especifico
 router.route("/:id").get( isAuth, getProduct).put(isAuth, updateProduct).delete(isAuth, deleteProduct)

export default router;