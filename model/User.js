import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import generarId from '../helpers/generarId.js';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
            type: String, 
            required: true,
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
    rol: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
        default: generarId()
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", async function(next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


userSchema.method("comprobarUsuarioPassword", async function(password) {

    return await bcrypt.compare(password, this.password);
})

const User = mongoose.model('User', userSchema);
export default User;