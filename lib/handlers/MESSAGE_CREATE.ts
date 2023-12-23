import Client from "../Client";
import { Message } from "../types/Message";
import { Payload } from "../interfaces/Payload";


export default function(client: Client, payload: Payload) {
    const message: Message = new Message(payload.d)

    client.emit("messageCreate", message)
}