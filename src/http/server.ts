import fastify from 'fastify'
import { CreatePoll } from './routes/create-poll'
import { GetPoll } from './routes/get-poll'


const app = fastify()

app.register(CreatePoll)
app.register(GetPoll)

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running')
})

