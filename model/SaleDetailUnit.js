import mongoose from "mongoose";
const { Schema  } = mongoose;

const saleDetailSchema = new Schema({
    quantity: {
        type: Number,
        default: 0,
        min: 0,
        require: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    total: {
        type: Number,
        default: 0,
        require: true,
        min: 0
    },
    sale: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sale"
    }
});

const SaleDetailUnit = mongoose.model("SaleDetailUnit", saleDetailSchema);
export default SaleDetailUnit;