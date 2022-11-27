import Provider from "../model/Provider.js";

const getProviders = async (req, res) => {
    const providers = await Provider.find();

    res.json(providers);
};

const addProvider= async (req, res) => {

    const provider = new Provider(req.body);

    try {
        const providerSaved = await provider.save();
        
        res.json(providerSaved);
    } catch (error) {
        console.log(error);
    }
}

const getProvider = async (req, res) => {
    const { id } = req.params;
    // console.log(id);

    const providerDetail = await Provider.findById(id);
    // console.log(productDetail);

    res.json(providerDetail);

}

const updateProvider = async (req, res) => {
    const { id } = req.params;
    const provider = await Provider.findById(id);

    if(!provider) {
        const error = new Error("No se encontro el proveedor")
        res.status(403).json({msg: error.message});
    }

    try {
        const {name, representative, telephone, email, web, comment} = req.body;

        provider.name = name || product.name;
        provider.representative = representative || provider.representative;
        provider.telephone = telephone || provider.telephone;
        provider.email = email || provider.email;
        provider.web = web || provider.web;
        provider.comment = comment || provider.comment;
        await provider.save();

        res.json({msg: "Proveedor actualizado satisfactoriamente"});

    } catch (error) {
        console.log(error);
    }


}

const deleteProvider = async (req, res) => {
    const { id } = req.params;
    const provider = await Provider.findById(id);

    if(!provider) {
        const error = new Error("No se encontro el proveedor")
        res.status(403).json({msg: error.message});
    }

    try {
        await provider.deleteOne({_id: id});

        res.json(provider);
    } catch (error) {
        console.log(error);
    }
}


export {
    getProviders,
    addProvider,
    getProvider,
    updateProvider,
    deleteProvider
}