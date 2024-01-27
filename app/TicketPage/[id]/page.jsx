import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async () => {
  const res = await fetch('https://localhost:3000/api/Tickets/:id',{
  cache: "no-store",
  
  })
  if(!res.ok) {
    throw new Error("This ticket does not ")
  }
}

let updateTicketData = {};
const TicketPage = ({ params }) => {
  const EDITMODE= params.id === "new"? true: false
  

  if(EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;

  } else {
    updateTicketData = {
      entityId = "new"
    }
  }

  return <TicketForm ticket={updateTicketData}/>
}
