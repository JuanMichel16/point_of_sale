import { json } from "express";
import Store from "../model/Store.js";

const createStore = async (req, res, next) => {

    const storeData = {name: "Mixtli", direction: "Calle Francisco y Madero, Colonia Centro, Minatitlán Col.", telephone: "3121457689", web: ""}

    const storeExists = await Store.findOne({name: "Mixtli"});

    if(!storeExists) {
        try {
            const store = new Store(storeData);
            const storeSave = await store.save();

        } catch(error) {
            console.log(error);
        }
    }

    next();
}

export default createStore;