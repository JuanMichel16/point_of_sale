import Sale from "../model/Sale.js";

const addSale = async (req, res) => {
    const productoNuevo = {
        quantity: 1,
        product: 1,
        total: 2,
        sale: 1
    };

    try {
        const newSale = Sale(req.body);
        newSale.user = req.user._id;
        newSale.saleDetail.push(productoNuevo);
        const saleSaved = await newSale.save();
        res.json(saleSaved);
    } catch (error) {
        console.log(error);
    }

}


export {
    addSale
}   