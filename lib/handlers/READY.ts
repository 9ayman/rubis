import e from "express";
import Client from "../Client";
import ClientUser from "../Types/ClientUser";
import { Payload } from "../interfaces/Payload";


export default function(client: Client, payload: Payload) {
    const { user } = payload.d;

    client.user = new ClientUser(user);

    client.emit("ready");
}