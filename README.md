# Code example

```ts
import Client, { ClientEvents } from "rubis"
import { Message } from "rubis"

const client = new Client()

client.on(ClientEvents.ClientReady, () => {
    console.log(`Prêt en tant que ` + client.user.username)
})

client.on(ClientEvents.MessageCreate, (message: Message) => {
    console.log(message.content)
})

client.login("MTE4Nzc5ODc0Mzg2MTQ0NDczOQ.GoLkB2.dnBg0YEx84IX3YdZArTwnzLKZTH6FUEjNETtHw")
```
