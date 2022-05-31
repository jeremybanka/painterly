import type { LuumSpec } from "~"

import type { InteractiveScheme, NonInteractiveScheme } from "~/scheme"
import { paletteToScssRule } from "~/scheme"
import { mixPalette } from "~/scheme/import"

const BLUE: LuumSpec = {
  hue: 200,
  sat: 255,
  lum: 0,
  prefer: `lum`,
}

describe(`mixPalette`, () => {
  it(`renders css with hover and active attributes`, () => {
    const scheme: InteractiveScheme = {
      root: [[`spec`, BLUE]],
      attributes: {
        "--color-bg": {
          base: [[`lum`, 95 / 100]],
          hover: [[`lum`, 1]],
          active: [[`prefer`, `sat`]],
          disabled: [[`lum`, 0]],
        },
        "--color-fg": {
          base: [
            [`fix`, `sat`],
            [`shade`, 10],
          ],
          hover: [[`fix`, `sat`]],
          active: [[`lum`, 0]],
          disabled: [[`lum`, 0]],
        },
      },
    }
    const palette = mixPalette(scheme)
    console.log(palette)
    const css = paletteToScssRule(`input[type="whatever"]`, palette)
    console.log(css)
    //    expect(palette).toBeCloseTo(150)
  })
  it(`renders child rules`, () => {
    const scheme: NonInteractiveScheme = {
      root: [[`spec`, BLUE]],
      attributes: {
        "--color-bg": [[`lum`, 95 / 100]],
      },
      children: {
        "div.foo": {
          attributes: {
            "--color-bg": [[`lum`, 85 / 100]],
          },
        },
      },
    }
    const palette = mixPalette(scheme)
    const css = paletteToScssRule(`input[type="whatever"]`, palette)
    console.log(css)
  })
})
