import createStore from "../middleware/createStore.js";
import isAuth from "../middleware/authMiddleware.js";

import express from "express";
const router = express.Router();

import {  
        getData,
        editStore
} from "../controllers/storeController.js";

router.get("/", isAuth, createStore, getData);
router.route("/modificar-tienda").get(isAuth, getData).post(isAuth, editStore);

export default router;