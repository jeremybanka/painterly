import type { FC } from "react"

import { Link } from "remix"

import styled from "@emotion/styled"

import { useDarkMode } from "~/hooks/useMediaQuery"

const Gap = styled.span`
  height: 0;
  width: 0;
  flex-grow: 1;
`

const App = styled.div`
  width: 100%;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 500px) and (min-height: 100vw) {
    min-height: 100.1vh;
  }
  > * {
    padding: 10px;
  }
  header,
  footer {
  }
  header {
    gap: 10px;
    flex-flow: row;
  }
  main {
    background: var(--color-background);
    mix-blend-mode: multiply;
    flex-grow: 1;
  }
  footer {
    text-align: center;
  }
`

const MainNav = styled(`nav`)`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    li {
    }
  }
`
MainNav.defaultProps = {
  "aria-label": `Main Navigation`,
}

const Layout: FC = ({ children }) => {
  const isDarkMode = useDarkMode()

  console.log(`isDarkMode: ${isDarkMode}`)
  return (
    <App>
      <header>
        <Link to="/" title="Remix">
          <h1>Hello</h1>
        </Link>
        <Gap />
        <MainNav>
          <ul>
            <li>
              <Link to="/color-schemes">Color Schemes</Link>
            </li>
          </ul>
        </MainNav>
      </header>
      <main>{children}</main>
      {/* <footer>
        <p>&copy; You!</p>
      </footer> */}
    </App>
  )
}

export default Layout
