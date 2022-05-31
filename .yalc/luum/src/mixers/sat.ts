import type { Mixer } from "."
import { clamp } from ".."

export const setSat: Mixer<number | ((sat: number) => number)> = (
  color,
  value
) => {
  const newSat = value instanceof Function ? value(color.sat) : value
  return { ...color, sat: clamp(newSat, [0, 255]) }
}
export const amp: Mixer<number> = (color, value) =>
  setSat(color, (sat) => sat + value)

export const mute: Mixer<number> = (color, value) =>
  setSat(color, (sat) => sat - value)
