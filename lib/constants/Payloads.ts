import { Intents } from './Constants';

export const Hello = {
    op: 10,
    d: null
}

export const Heartbeat = {
    op: 1,
    d: null
}

export const Identify = {
    op: 2,
    d: {
        token: "my_token",
        properties: {
        os: "Windows Server",
        browser: "disco",
        device: "disco"
        },
        large_threshold: 250,
        shard: [0, 1],
        presence: {
        activities: [{
            name: "speed.js",
            type: 0
        }],
        status: "dnd",
        since: 91879201,
        afk: false
        },
        intents: Intents.ALL
    }
}