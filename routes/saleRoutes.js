import express from "express";
const router = express.Router();

import {
    addSale
} 
from "../controllers/saleController.js";

import isAuth from "../middleware/authMiddleware.js";


router.post("/", isAuth, addSale);


export default router;