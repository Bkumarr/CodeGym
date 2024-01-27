import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./JobPriorityDisplay";
import ProgressDisplay from "./SkillsProgress";
import StatusDisplay from "./StatusDisplay";


const JobCard = ({ticket}) => {
    const formatTimestamp = (timestamp) => {
        const option = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };

        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString("en-GB", options);
        return formattedDate;
    }
    return (
        <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
         <div className="flex mb-3">
            <PriorityDisplay priority={ticket.priority} />   
             <div className="ml-auto">
                <DeleteBlock/>
            </div>         
         </div>
            <Link href={`/TicketPage/${ticket.entityId}`} style={{display: "contents"}}/>
            <h4>{ticket.title} </h4>
            <hr className="h-px border-0 bg-page mb-2" />
            <p className="whitespace-pre-wrap">{ticket.description}
                this is the work order description to dispatch!
            </p>
            <div className="flex-grow"></div>
            <div className="flex mt-2 ">
                <div className="flex flex-col">
                    <p className="text-xs my-1">
                        {formatTimestamp(ticket.createdAt)}
                    </p>
                   <ProgressDisplay progress= {ticket.progress}/>
                </div> 
                <div className="ml-auto flex items-end">
                   <StatusDisplay status={ticket.status}/>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default JobCard
