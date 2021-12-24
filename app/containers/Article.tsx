import type { FC } from "react"

import { motion } from "framer-motion"

const Article: FC = ({ children }) => (
  <motion.article
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    key="page"
  >
    {children}
  </motion.article>
)

export default Article
