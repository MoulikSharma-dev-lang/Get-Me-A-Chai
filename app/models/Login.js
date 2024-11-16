import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    created_at: {type: Date, default: Date.now()}
})

const LoginUser = mongoose.models.Login || mongoose.model("Login", loginSchema)
export default LoginUser