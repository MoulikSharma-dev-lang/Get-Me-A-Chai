import { NextResponse } from "next/server";
import { connectDB } from "@/app/db/connectDB";
import PaymentUser from "@/app/models/Payment";

export async function POST(request) {
    const data = await request.json()
    try {
        connectDB()
        await PaymentUser.create(data)
        return NextResponse.json({data: "Payment was successfull!", success: true})
    } catch (error) {
        console.log(error)
        return NextResponse.json({data: "Payment was not successfull!", success: false})
    }
}