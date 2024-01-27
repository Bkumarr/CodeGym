import Ticket from "@/app/(models)/Ticket"
import {NextResponse} from "next/server";

export async function GET(req, {params}) {
    
    try {
        const {id} = params;
        const foundTicket = await  ticketRepos.search.return({entityId: id});
        return NextResponse.json({message: "Ticket Deleted"}, { status: 200});

    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500});

}
export async function DELETE(req, {params}) {
    try { 
         const {id} = params
         await ticketRepos.remove(id);
         return NextResponse.json({message: "Ticket Deleted"}, { status: 200});

    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500});

    }
}
export async function PUT(req, {params}) {
    try { 
         const {id} = params
         const body = await req.json();
         const ticketData = body.formData;
         const updateTicketData = await ticketRepos.fetch(id, {
             ...ticketData,
         });
         
         return NextResponse.json({message: "Ticket updated"}, { status: 200});

    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500});

    }
}
}