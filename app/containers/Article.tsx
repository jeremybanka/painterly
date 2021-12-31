import type { FC } from "react"

import styled from "@emotion/styled"
import { rounded } from "corners"
import { motion } from "framer-motion"

const RoundedThing = styled(rounded.div)`
  background: var(--color-highlight);
  color: var(--color-background);
  padding: 20px;
  height: 100px;
`

const Article: FC = ({ children }) => (
  <motion.article
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    key="page"
  >
    {children}
    <RoundedThing>yo</RoundedThing>
  </motion.article>
)

export default Article
