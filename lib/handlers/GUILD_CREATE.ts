import Client from "../Client";
import { Payload } from "../interfaces/Payload";


export default function(client: Client, payload: Payload) {
        
    client.emit("guildCreate")
}