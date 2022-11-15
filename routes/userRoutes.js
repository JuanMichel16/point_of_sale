import express from "express";
const router = express.Router();

import {registrar, perfil} from "../controllers/userController.js";


router.post("/", registrar);

router.get("/perfil", perfil);


export default router;