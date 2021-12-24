import { RemixBrowser } from "remix"

import { hydrate } from "react-dom"
import { RecoilRoot } from "recoil"

hydrate(
  <RecoilRoot>
    <RemixBrowser />
  </RecoilRoot>,
  document
)
