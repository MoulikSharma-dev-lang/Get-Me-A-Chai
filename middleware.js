import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
    const cookieStore = await cookies()
    if (request.nextUrl.pathname.endsWith("/login")) {
        const token = cookieStore.get("token")
        if (token) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/profile`)
        }
    }
    else if (request.nextUrl.pathname.endsWith("/profile")) {
        const token = cookieStore.get("token")
        if (!token) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/login`)
        }
    }
}