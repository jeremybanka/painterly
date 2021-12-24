import type { FC } from "react"
import { useEffect } from "react"
import { useState } from "react"

import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix"

import styled from "@emotion/styled"
import { CMYK, mixNewSpec, specToHex } from "luum"
import { RecoilRoot } from "recoil"

import Announcer from "~/components/Announcer"
import { useDarkMode } from "~/hooks/useMediaQuery"

const Body = styled.body<{ hex: string }>(({ hex }) => ({
  "--color-highlight": hex,
}))

const Document: FC<{ title?: string }> = ({ children, title }) => {
  const [bgColorSpec, setBgColorSpec] = useState({ hue: 0, sat: 50, lum: 0.95 })
  const bgColorHex = specToHex(bgColorSpec, CMYK)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColorSpec((spec) => mixNewSpec(spec, [[`hue`, spec.hue + 1]]))
    }, 100)
    return () => clearInterval(interval)
  })

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body
        style={{
          /* @ts-expect-error css types don't know about variables...*/
          "--color-highlight": bgColorHex,
          "willChange": `background-color`,
        }}
      >
        {children}
        <Announcer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === `development` && <LiveReload />}
      </body>
    </html>
  )
}

export default Document
