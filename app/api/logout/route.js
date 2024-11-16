import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import LoginUser from "@/app/models/Login";
import { connectDB } from "@/app/db/connectDB";

export async function DELETE(request) {
    const cookieStore = await cookies()
    try {
        const token = cookieStore.get("token")
        if (!token) {
            return NextResponse.json({data: "User not found!", success: false})
        } else {
            const verifiedToken = jwt.verify(token.value, process.env.JWT_SECRET)
            connectDB()
            await LoginUser.findOneAndDelete(verifiedToken.email)
            cookieStore.delete("token")
            return NextResponse.json({data: "User logged out successfully!", success: true})
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({data: "Error while logging out user", success: false, error: error})
    }
}