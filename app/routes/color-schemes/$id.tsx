import type { FC } from "react"

import type { LoaderFunction } from "remix"
import { useLoaderData, useParams } from "remix"

import styled from "@emotion/styled"
import type { ColorScheme } from "@prisma/client"
import { rounded } from "corners"

import { db } from "~/utils/db.server"

type LoaderData = { colorScheme: ColorScheme }
export const loader: LoaderFunction = async ({ params }) => ({
  colorScheme: await db.colorScheme.findUnique({ where: { id: params.id } }),
})

const RoundedThing = styled(rounded.div)`
  background: var(--color-highlight);
  color: var(--color-background);
  padding: 20px;
  height: 100px;
`

const $id: FC = () => {
  const { colorScheme } = useLoaderData<LoaderData>()
  return <RoundedThing>{colorScheme.name}</RoundedThing>
}
export default $id
