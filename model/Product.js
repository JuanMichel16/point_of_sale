import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    description: {
        type: String, 
        required: false,
        trim: true
    },
    stock: {
        type: Number,
        min: 0,
        required: true,
        trim: true,
    },
    category: {
        type: String, 
        required: true,
        trim: true
    },
    costPrice: {
        type: Number, 
        required: false,
        trim: true
    },
    salePrice: {
        type: Number, 
        required: true,
        trim: true
    },
    image: {
        type: String, 
        required: false,
        trim: true
    },
});

const Product = mongoose.model('Product', productSchema);
export default Product;