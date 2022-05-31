import type { Mixer } from "."
import { clamp } from ".."

export const setLum: Mixer<number | ((lum: number) => number)> = (
  color,
  value
) => {
  const newLum = value instanceof Function ? value(color.lum) : value
  return { ...color, lum: clamp(newLum, [0, 1]) }
}
export const tint: Mixer<number> = (color, value) =>
  setLum(color, (lum) => (lum * 100 + value) / 100)

export const shade: Mixer<number> = (color, value) =>
  setLum(color, (lum) => (lum * 100 - value) / 100)
