import Store from "../model/Store.js";


const getData = async (req, res) => {
    // console.log("eh")
    const store = await Store.findOne();
    res.json(store);
}

const editStore = async (req, res) => {

    const {name, direction, telephone, web} = req.body;
    const updateStore = await Store.findOne();

    try {
        updateStore.name = name;
        updateStore.direction = direction;
        updateStore.telephone = telephone;
        updateStore.web = web;
        await updateStore.save();
        console.log(updateStore);

        // res.json({msg: "Los datos han sido actualizados de manera exitosa"})

        res.json(updateStore);
        
    } catch (error) {
        console.log(error);
    }
}

export {
    getData,
    editStore
}