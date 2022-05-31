import { CMYK } from "../../src/constants/filters"
import maxSatForHueInFilter from "../../src/solveFor/maxSatForHueInFilter"

test(`simulateCMYK desaturates pure green 50%`, () => {
  const hue = 120
  const filter = CMYK
  const maxSat = 127
  expect(maxSatForHueInFilter(hue, filter)).toEqual(maxSat)
})

test(`simulateCMYK desaturates pure green+360 50%`, () => {
  const hue = 480
  const filter = CMYK
  const maxSat = 127
  expect(maxSatForHueInFilter(hue, filter)).toEqual(maxSat)
})
