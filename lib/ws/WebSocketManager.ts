import WebSocket from 'ws';
import { Constants } from '../constants/Constants';
import { Heartbeat, Identify } from '../constants/Payloads';
import Client from '../Client';
import { Payload } from '../interfaces/Payload';

export default class WebSocketManager {
    private socket: WebSocket | undefined;
    private interval: any;

    constructor(private client: Client) {

    }
    
    connect = (token: string) => {
        this.socket = new WebSocket(Constants.GATEWAY);

        this.socket.on('open', () => {
            console.log("WebSocket connection established.");
          });
          
        this.socket.on('message', (data: WebSocket.Data) => {
            try {
                const payload: Payload = JSON.parse(data?.toString());
                const { t: event, op, d } = payload;
            
                if(op === 10) {
                    const { heartbeat_interval } = d;

                    this.interval = this.heartbeat(heartbeat_interval);
                    this.identify(token);
                }
            
                if(event) {
                    (async () => { 
                        try {
                            const { default: module } = await import(`../handlers/${event}.ts`)
                            module(this.client, payload)
                        }  catch(err) {
                            console.log(`The ${event} doesn't exist.`)
                        }
                    })()
                }

                console.log(payload);
            } catch(err) {
                console.log(err);
            }
        });

        this.socket.on('close', (code: number, reason: string) => {
            console.log(`WebSocket connection closed. Code: ${code}, Reason: ${reason}`);
          });
          
        this.socket.on('error', (error: Error) => {
        console.error("WebSocket error:", error.message);
        });
    }

    heartbeat = (ms: number) => {
        return setInterval(() => {
            if(this.socket) this.socket.send(JSON.stringify(Heartbeat));
        }, ms);
    }

    identify = (token: string) => {
        const identify = Identify;
        identify.d.token = token;

        if(this.socket) this.socket.send(JSON.stringify(identify));
    }
}