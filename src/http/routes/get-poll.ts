import { z } from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"

export async function GetPoll(app: FastifyInstance) {
    app.get('/polls/:pollId', async (request, reply) => {
        const getPollParams = z.object({
            pollId: z.string().uuid()
        })

        const { pollId } = getPollParams.parse(request.params)

        const poll = await prisma.poll.findUnique({
            where: {
                id: pollId
            }
        })

        return reply.send({ poll })

    })
}