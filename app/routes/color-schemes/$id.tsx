import type { FC } from "react"

import type { LoaderFunction } from "remix"
import { useLoaderData, useParams } from "remix"

import type { ColorScheme } from "@prisma/client"

import { db } from "~/utils/db.server"

type LoaderData = { colorScheme: ColorScheme }
export const loader: LoaderFunction = async ({ params }) => ({
  colorScheme: await db.colorScheme.findUnique({ where: { id: params.id } }),
})

const $id: FC = () => {
  const { colorScheme } = useLoaderData<LoaderData>()
  return <div>{colorScheme.name}</div>
}
export default $id
