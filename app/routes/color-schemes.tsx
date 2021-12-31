import type { FC } from "react"

import type { LoaderFunction } from "remix"
import { NavLink, useLoaderData, Outlet } from "remix"

import type { ColorScheme } from "@prisma/client"

import Article from "~/containers/Article"
import { db } from "~/utils/db.server"

type LoaderData = { colorSchemes: ColorScheme[] }
export const loader: LoaderFunction = async () => {
  const data = { colorSchemes: await db.colorScheme.findMany() }
  return data
}
const ColorSchemesRoute: FC = () => {
  const data = useLoaderData<LoaderData>()
  console.log(data)
  return (
    <Article>
      <h1>Color Schemes</h1>
      <nav>
        <ul>
          {data.colorSchemes.map((colorScheme) => (
            <li key={colorScheme.id}>
              <NavLink to={`/color-schemes/${colorScheme.id}`}>
                {colorScheme.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </Article>
  )
}

export default ColorSchemesRoute
