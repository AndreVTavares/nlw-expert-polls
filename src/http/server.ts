import fastify from 'fastify'
import { CreatePoll } from './routes/create-poll'
import { GetPoll } from './routes/get-poll'
import { VoteOnPoll } from './routes/vote-on-poll'
import cookie from '@fastify/cookie'
 


const app = fastify()

app.register(cookie, {
    secret: "polls-app-nlw", 
    hook: 'onRequest', 
    parseOptions: {}  
})

app.register(CreatePoll)
app.register(GetPoll)
app.register(VoteOnPoll)

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running')
})

