import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firtsName: {
            type: String, 
            required: true,
            trim: true
    },
    lastName: {
        type: String, 
        required: false,
        trim: true
    },
    userName: {
        type: String, 
        required: false,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    token: {
        type: String,
        
    },
    confirmado: {
        type: Boolean
    }
});

const User = mongoose.model('User', userSchema);
export default User;