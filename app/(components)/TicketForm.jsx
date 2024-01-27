import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();
    const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress:0,
    status: "NA",
    category: "hardware problem"
  };

if(EDITMODE) {
  startingTicketData["title"] = ticket.title
  startingTicketData["description"] = ticket.description
  startingTicketData["priority"] = ticket.priority
  startingTicketData["progress"] = ticket.progress
  startingTicketData["status"] = ticket.status
  startingTicketData["category"] = ticket.category

}
  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
  
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(EDITMODE) {
      const res = await fetch("/api/Tickets/"`${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({formData}),
        "content-type": "application/json"
      })
  
      if (!res.ok) {
        throw new Error("Failed to create Ticket.")
      }
      
  } else {
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({formData}),
      "content-type": "application/json"
    })

    if (!res.ok) {
      throw new Error("Failed to create Ticket.")
    }
  }

    router.refresh()
    router.push("/")
  };

  const categories = [
    "Hardware Problem",
    "Software Problem",
    "Application Deveopment",
    "Project",
  ];


  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{ EDITMODE? "Updating.." :"Create the form "} </h3>
        <label htmlFor="">title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
          <label htmlFor="">Description</label>
          <textarea
            id="description"
            name="desccription"
            onChange={handleChange}
            required={true}
            value={formData.titledescription}
            rows="5"
          />

            <label>Category </label>
            <select name="category" 
            value={formData.category}
            onChange={handleChange}
            >
            {categories?.map((category, _index) => (
            <option key={_index} value={category}>
              {category}
            </option>
            ))}
            </select>

            <label>Priority</label>
            <div>
            <input
              id="priority-1"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={1}
              checked={formData.priority == 1}
              />
            
            <label>1</label>
            
            <input
              id="priority-2"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={2}
              checked={formData.priority == 2}
        />
            <label>2</label>

            <input
              id="priority-3"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={3}
              checked={formData.priority == 3}
              />
            
            <label>3</label>

            <input
              id="priority-4"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={4}
              checked={formData.priority == 4}
              />
            
            <label>4</label>

            <input
              id="priority-5"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={5}
              checked={formData.priority == 5}
              />
            
            <label>5</label>
          </div>
          <label>Progress<label>
            <input
              id="progress"
              name="progress"
              type="range"
              onChange={handleChange}
              checked={formData.progress}
              min="0"
              max="100"
        />
            <label>Category </label>
            <select name="category" 
            value={formData.category}
            onChange={handleChange}
            >
            <option value="Hardware Problem">Hardware issue</option>
            <option value="Software Problem">Software issues</option>
            <option value="Project">Project</option>
            </select>

            <label>Status </label>
            <select name="status" 
            value={formData.status} 
            onChange={handleChange}
            >
            <option value="not started">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
            </select>
            <input type="submit" className="btn" value={EDITMODE? "Updating.." :"Create the form"} />
                       
      </form>
    </div>
  );
};

export default TicketForm;