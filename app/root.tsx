import type { FC } from "react"

import { Outlet, useCatch } from "remix"
import type { LinksFunction } from "remix"

import { AnimatePresence } from "framer-motion"

import darkStylesUrl from "~/styles/dark.css"
import globalLgStylesUrl from "~/styles/global-lg.css"
import globalMdStylesUrl from "~/styles/global-md.css"
import globalStylesUrl from "~/styles/global.css"

import Document from "./containers/Document"
import Layout from "./containers/Layout"

export const links: LinksFunction = () => {
  return [
    { rel: `stylesheet`, href: globalStylesUrl },
    {
      rel: `stylesheet`,
      href: darkStylesUrl,
      media: `(prefers-color-scheme: dark)`,
    },
    { rel: `stylesheet`, href: globalMdStylesUrl, media: `(min-width: 640px)` },
    { rel: `stylesheet`, href: globalLgStylesUrl, media: `(min-width: 1024px)` },
  ]
}

export const CatchBoundary: FC = () => {
  const caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = `Oops! Looks like you tried to visit a page you don’t have access to.`
      break
    case 404:
      message = `Oops! Looks like you tried to visit a page that does not exist.`
      break
    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        <p>{message}</p>
      </Layout>
    </Document>
  )
}

export const ErrorBoundary: FC<{ error: Error }> = ({ error }) => {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your users
            to see.
          </p>
        </div>
      </Layout>
    </Document>
  )
}

const App: FC = () => (
  <Document>
    <Layout>
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </Layout>
  </Document>
)

export default App
