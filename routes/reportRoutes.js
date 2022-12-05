import express from "express";
const router = express.Router();

import { getSales }  from "../controllers/reportController.js";

import isAuth from "../middleware/authMiddleware.js";


router.get("/", isAuth, getSales);


export default router;