import ticketRepos from "@app/(models)/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    console.log("POST RAN")
    try {
        const body = await req.json();
        const ticketData = body.formData;
        await ticketRepos.createEntity(ticketData);

    } catch (error) {
        return NextResponse.json({ message: "Error", error}, {status: 500});
    }
         

export async function GET() {
    try {
        const tickets = await ticketRepo.search.returnAll();
        return NextResponse.json({tickets }, {status: 200});
    } catch(error) {
        return NextResponse.json( {message: "Error", error}, { status: 500});
    }


 }
    
}