import { FastifyInstance } from "fastify";

export async function pollResults(app: FastifyInstance) {
    app.get('/polls/:pollId/results', { websocket: true }, (connection, request) => {
        connection.socket.on('message', (message: string) => {
            // message.toString() === 'hi from client'
            connection.socket.send('You sent' + message)
        })
    })
}