// import mongoose, { Schema } from "mongooge";

// mongoose.connect(process.env.MONGODB_URI);
// mongoose.Promise = global.Promise;

// const ticketSchema = new Schema(

//     {
//         title: String,
//         description: String,
//         salary: Number,
//         skills: String
//     },
//     {
//         timestamps: true,
//     }


// )

// const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
// export default Ticket;

import { Client } from 'redis-om';
import { Entity, Schema } from 'redis-om'
const conn = process.env.REDIS_URL

const client = await new Client().open(conn)

class Ticket extends Entity {}

const ticketSchema = new Schema(Ticket, {
    title: { type: 'string' },
    description: { type: 'text' },
    category: { type: 'string' },
    priority: { type: 'number' },
    progress: { type: 'number' },
    status: { type: 'string[]' },
    active: { type: 'boolean' }
  

})

/* use the client to create a Repository just for tickets */
export const ticketRepos = new Repository(ticketSchema, client);
await ticketRepos.createIndex();