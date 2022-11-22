import mongoose from 'mongoose';
const { Schema } = mongoose;

const storeSchema = new Schema({
        name: {
            type: String, 
            default: "Mixtli",
            required: true,
            trim: true
        },
        direction: {
            type: String,
            default: "Calle Francisco y Madero, Colonia Centro, Minatitlán Col.",
            required: true,
            trim: true,
        },
        telephone: {
            type: String,
            default: "3121457689",
            required: false,
            trim: true
        },
        web: {
            type: String, 
            default: "",
            required: false,
            trim: true
        },
    }, 
    {
        timestamps: true
    }

)

const Store = mongoose.model('Store', storeSchema);
export default Store;