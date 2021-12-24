import type { FC } from "react"

import { Outlet } from "remix"

import Article from "~/containers/Article"

const ColorSchemesRoute: FC = () => (
  <Article>
    <h1>ColorSchemes</h1>
    <Outlet />
  </Article>
)

export default ColorSchemesRoute
