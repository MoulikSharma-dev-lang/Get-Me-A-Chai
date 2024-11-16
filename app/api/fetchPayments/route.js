import { NextResponse } from "next/server";
import { connectDB } from "@/app/db/connectDB";
import PaymentUser from "@/app/models/Payment";

export async function GET() {
    try {
        connectDB()
        const payments = await PaymentUser.find()
        return NextResponse.json({ data: "Payments fetched!", success: true, payments: payments })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ data: "Payments not fetched!", success: false, error: error })
    }
}