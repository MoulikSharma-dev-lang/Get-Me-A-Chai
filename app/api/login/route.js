import { NextResponse } from "next/server";
import LoginUser from "@/app/models/Login";
import { connectDB } from "@/app/db/connectDB";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function POST(request) {
    const data = await request.json()
    const cookieStore = await cookies()
    try {
        connectDB()
        await LoginUser.create(data)
        const token = jwt.sign({username: data.username, email: data.email}, process.env.JWT_SECRET)
        cookieStore.set("token", token, {
            httpOnly: true,
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        })
        return NextResponse.json({data: "User logged in successfully!", success: true})
    } catch (error) {
        console.log(error)
        return NextResponse.json({data: "Error while logging in user", success: false, error: error})
    }
}