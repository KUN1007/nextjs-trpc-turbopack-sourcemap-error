import { serverApi } from '~/lib/trpc-server'

export default async function Patch({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const res = await serverApi.patch.getPatchById.query({ id: Number(id) })

  return <div>{res}</div>
}
