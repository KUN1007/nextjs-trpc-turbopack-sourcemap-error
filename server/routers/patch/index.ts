import { z } from 'zod'
import { router, publicProcedure } from '~/lib/trpc'

export const patchRouter = router({
  getPatchById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      return 111
    }),
})
