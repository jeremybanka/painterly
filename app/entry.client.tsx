import { RemixBrowser } from "remix"

import { hydrateRoot } from "react-dom"
import { RecoilRoot } from "recoil"

hydrateRoot(
  document,
  <RecoilRoot>
    <RemixBrowser />
  </RecoilRoot>
)
