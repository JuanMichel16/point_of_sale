import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

import getDate from "../helpers/getDate.js";


const saleSchema = new Schema({
    date: {
        type: Date,
        default: Date.now(),
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    saleDetail: {
        type: [],
        default: undefined
    },
    productsNumber: {
        type: Number,
        require: true,
        min: 0
    },
    subTotal: {
        type: Number,
        require: true,
        min: 0
    },
    discount: {
        type: Number,
        default: 0,
        require: true,
        min: 0
    },
    tax: {
        type: Number,
        require: true,
        min: 0
    },
    total: {
        type: Number,
        require: true,
        min: 0
    }

},  {
        timestamps: true
    }
);

saleSchema.path("date") instanceof Date;

const Sale = mongoose.model("Sale", saleSchema)
export default Sale;