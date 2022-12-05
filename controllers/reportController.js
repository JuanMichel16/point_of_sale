import Sale from "../model/Sale.js";

const getSales = async (req, res) => {
    const sales = await Sale.find();


    //Obteniendo fecha de la venta
    console.log(sales[0].date.getHours(), sales[0].date.getMinutes(), sales[0].date.getSeconds());
}

export {
    getSales
}