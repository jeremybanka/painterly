import type { Mixer } from "."

const contrast: Mixer<0 | 1 | 2> = (color, value) => {
  const { lum } = color
  switch (value) {
    case 0:
      return { ...color, lum: lum > 0.666 ? 0 : 1 }
    case 1:
      return { ...color, lum: lum > 0.666 ? 0.05 : 0.95 }
    case 2:
      if (lum > 0.75) {
        return { ...color, lum: lum / 2 }
      } else if (lum < 0.25) {
        return { ...color, lum: lum + (1 - lum) / 2 }
      }
      return { ...color, lum: lum > 0.666 ? 1 : 0 }
  }
}

export default contrast
