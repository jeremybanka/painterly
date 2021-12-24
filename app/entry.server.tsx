import { RemixServer } from "remix"
import type { EntryContext } from "remix"

// import createCache from "@emotion/cache"
// import { CacheProvider } from "@emotion/react"
// import createEmotionServer from "@emotion/server/create-instance"
import { renderToString } from "react-dom/server"

// const initializeRecoilState = (initialRecoilState) => ({set}) =>
//     Object.keys(initialRecoilState).map((key) => {
//         const value = initialRecoilState[key]
//         const atom = all_atoms[key]
//         set(atom, value)
//     })

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
): Response {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  )
  responseHeaders.set(`Content-Type`, `text/html`)

  return new Response(`<!DOCTYPE html>` + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
