import mongoose from "mongoose";
const { Schema } = mongoose;


const providerSchema = new Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    representative: {
        type: String, 
        required: true,
        trim: true
    },
    telephone: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String, 
        unique: true,
        required: true,
        trim: true
    },
    web: {
        type: String, 
        required: true,
        trim: true
    },
    comment: {
        type: String, 
        required: true,
        trim: true
    }
})


const Provider = mongoose.model('Provider', providerSchema);
export default Provider;
