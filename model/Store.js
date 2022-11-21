import mongoose from 'mongoose';
const { Schema } = mongoose;

const storeSchema = new Schema({
    name: {
            type: String, 
            required: true,
            trim: true
    },
    direction: {
        type: String,
        min: 0,
        required: true,
        trim: true,
    },
    telephone: {
        type: String, 
        required: false,
        trim: true
    },
    web: {
        type: String, 
        required: false,
        trim: true
    },
});

const Store = mongoose.model('Store', storeSchema);
export default Store;