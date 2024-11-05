import { initTRPC } from '@trpc/server'
import { ZodError } from 'zod'
import { createContext } from '~/server/context'

const t = initTRPC.context<typeof createContext>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

const middleware = t.middleware

export const router = t.router
export const publicProcedure = t.procedure
