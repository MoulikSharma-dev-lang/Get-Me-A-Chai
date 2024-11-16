import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    amount: {type: Number, required: true},
    created_at: {type: Date, default: Date.now()}
})

const PaymentUser = mongoose.models.Payment || mongoose.model("Payment", paymentSchema)
export default PaymentUser