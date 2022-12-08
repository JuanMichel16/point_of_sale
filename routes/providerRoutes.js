import isAuth from "../middleware/authMiddleware.js";

import express from "express";
const router = express.Router();

import {
    getProviders,
    addProvider,
    getProvider,
    updateProvider,
    deleteProvider
} from "../controllers/providerController.js";


//Inventario general
router.route("/").get(isAuth, getProviders).post(isAuth, addProvider);

// Productos en especifico
 router.route("/:id").get( isAuth, getProvider).put(isAuth, updateProvider).delete(isAuth, deleteProvider);

export default router;