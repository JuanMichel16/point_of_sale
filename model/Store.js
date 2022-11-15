import mongoose from 'mongoose';
const { Schema } = mongoose;

const storeSchema = new Schema({
    name: {
            type: String, 
            required: true,
            trim: true
    },
    telefono: {
        type: String, 
        required: false,
        trim: true
    },
    web: {
        type: String, 
        required: false,
        trim: true
    },
    direction: {
        type: String,
        min: 0,
        required: true,
        trim: true,
    }
});

const Store = mongoose.model('Store', storeSchema);
export default Store;