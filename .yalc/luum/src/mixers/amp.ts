import type { Mixer } from "."

const amp: Mixer<number> = (color, value) => {
  return { ...color, sat: color.sat + value }
}

export default amp
