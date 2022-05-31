import type { Mixer } from "."
import { wrapAround } from ".."

export const setHue: Mixer<number | ((hue: number) => number)> = (
  color,
  value
) => {
  const newHue = value instanceof Function ? value(color.hue) : value
  return { ...color, hue: wrapAround(newHue, [0, 360]) }
}

export const trine: Mixer<number> = (color, value) =>
  setHue(color, (hue) => hue + value * 120)

export const tetra: Mixer<number> = (color, value) =>
  setHue(color, (hue) => hue + value * 90)

export const split: Mixer<number> = (color, value) =>
  setHue(color, (hue) => hue + value * 150)
