import express from "express";
const router = express.Router();

import {
    registrar, 
    perfil, 
    confirmar, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword} 
from "../controllers/userController.js";

import isAuth from "../middleware/authMiddleware.js";


// Area publica, es decir, no ocupan estar registrados para poder entrar a estas url
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword); //Validar email del usuario
// router.get("/olvide-password/:token", comprobarToken); //Validar el token
// router.post("olvide-password/:token", nuevoPassword); //El usuario mandara el nuevo password
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)


// Area privada, necesitas autenticarte para poder ver estas rutas
router.get("/perfil", isAuth, perfil);


export default router;