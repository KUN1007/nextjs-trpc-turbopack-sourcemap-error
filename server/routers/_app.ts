import { router } from '~/lib/trpc'
import { patchRouter } from './patch/index'

export const appRouter = router({
  patch: patchRouter,
})

export type AppRouter = typeof appRouter
