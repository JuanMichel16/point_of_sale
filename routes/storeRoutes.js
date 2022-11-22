import createStore from "../middleware/createStore.js"

import express from "express";
const router = express.Router();

import {  
        getData,
        modifyStore,
        editStore
} from "../controllers/storeController.js";

router.get("/", createStore, getData);
router.route("/modificar-tienda").get(modifyStore).post(editStore);


export default router;