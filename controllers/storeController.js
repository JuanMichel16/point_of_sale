import { json } from "express";
import Store from "../model/Store.js";


const getData = async (req, res) => {
    const store = await Store.findOne();
    res.json({store});

}

const modifyStore = async (req, res) => {
    const store = await Store.findOne();
    res.json({store});
}

const editStore = async (req, res) => {

    const {name, direction, telephone, web} = req.body;

    try {
        const updateStore = await Store.findOne();
        updateStore.name = name;
        updateStore.direction = direction;
        updateStore.telephone = telephone;
        updateStore.web = web;
        await updateStore.save();

        res.json({msg: "Los datos han sido actualizados de manera exitosa"})
        
    } catch (error) {
        console.log(error);
    }
}

export {
    getData,
    modifyStore,
    editStore
}