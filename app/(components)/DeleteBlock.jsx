"use client";
import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons"
import { faX } from "fortawesome/react-fontawesome"
import { useRouter } from "next/navigation";

const DeleteBlock = ({id}) => {
    const router = useRouter();
    const deleteTicket = async () =>  {
        const res = await fetch(`https://localhost:3000/api/Tickets/${id}`, {
            method: "DELETE",
        })};
    
        if(res.ok){
            router.refresh();
        }
    return (
        <FontAwesomeIcon icon={faX} 
        className=" text-red-400 hover:cursor-pointer hover:text-red-200"
        onClick={deleteTicket}
        />
        );
};

export default DeleteBlock
