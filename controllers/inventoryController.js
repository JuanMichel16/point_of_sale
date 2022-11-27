import Product from "../model/Product.js";

const getInventory = async (req, res) => {
    const products = await Product.find();

    res.json(products);
};

const addProduct = async (req, res) => {

    try {
        const product = new Product(req.body);
        const productSaved = await product.save();
        
        res.json(productSaved);
    } catch (error) {
        console.log(error);
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params;
    // console.log(id);

    const productDetail = await Product.findById(id);
    // console.log(productDetail);

    res.json(productDetail);

}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product= await Product.findById(id);

    if(!product) {
        const error = new Error("No se encontro el producto")
        res.status(403).json({msg: error.message});
    }

    try {
        const {name, description, stock, category, costPrice, salePrice, image} = req.body;

        product.name = name || product.name;
        product.description = description || product.description;
        product.stock = stock || product.stock;
        product.category = category || product.category;
        product.costPrice = costPrice || product.costPrice;
        product.salePrice = salePrice || product.salePrice;
        product.image = image || product.image;
        await product.save();

        res.json({msg: "Producto actualizado satisfactoriamente"});

    } catch (error) {
        console.log(error);
    }


}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const productDeleted = await Product.findById(id);

    if(!productDeleted) {
        const error = new Error("No se encontro el producto")
        res.status(403).json({msg: error.message});
    }

    try {
        await productDeleted.deleteOne({_id: id});

        res.json(productDeleted);
    } catch (error) {
        console.log(productDeleted);
    }
}


export {
    getInventory,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}