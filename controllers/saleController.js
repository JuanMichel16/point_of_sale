import Sale from "../model/Sale.js";

const addSale = async (req, res) => {
    const productoNuevo = {
        quantity: 1,
        product: 1,
        total: 2,
        sale: 1
    };

    const newSale = new Sale(req.body);
    newSale.user = req.user._id;
    await newSale.save();
    newSale.saleDetail.push(productoNuevo);

    console.log(newSale.saleDetail);

}


export {
    addSale
}   