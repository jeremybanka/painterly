import type { Filter, Hex, LuumSpec } from "~"

import type { Mix } from "~/mixers"

export type InteractiveStates = `active` | `base` | `disabled` | `hover`

export type HTMLElementName =
  | `a`
  | `abbr`
  | `address`
  | `area`
  | `article`
  | `aside`
  | `audio`
  | `b`
  | `base`
  | `bdi`
  | `bdo`
  | `big`
  | `blockquote`
  | `body`
  | `br`
  | `button`
  | `canvas`
  | `caption`
  | `cite`
  | `code`
  | `col`
  | `colgroup`
  | `data`
  | `datalist`
  | `dd`
  | `del`
  | `details`
  | `dfn`
  | `dialog`
  | `div`
  | `dl`
  | `dt`
  | `em`
  | `embed`
  | `fieldset`
  | `figcaption`
  | `figure`
  | `footer`
  | `form`
  | `h1`
  | `h2`
  | `h3`
  | `h4`
  | `h5`
  | `h6`
  | `head`
  | `header`
  | `hgroup`
  | `hr`
  | `html`
  | `i`
  | `iframe`
  | `img`
  | `input`
  | `ins`
  | `kbd`
  | `keygen`
  | `label`
  | `legend`
  | `li`
  | `link`
  | `main`
  | `map`
  | `mark`
  | `menu`
  | `menuitem`
  | `meta`
  | `meter`
  | `nav`
  | `noscript`
  | `object`
  | `ol`
  | `optgroup`
  | `option`
  | `output`
  | `p`
  | `param`
  | `picture`
  | `pre`
  | `progress`
  | `q`
  | `rp`
  | `rt`
  | `ruby`
  | `s`
  | `samp`
  | `script`
  | `section`
  | `select`
  | `small`
  | `source`
  | `span`
  | `strong`
  | `style`
  | `sub`
  | `summary`
  | `sup`
  | `table`
  | `tbody`
  | `td`
  | `textarea`
  | `tfoot`
  | `th`
  | `thead`
  | `time`
  | `title`
  | `tr`
  | `track`
  | `u`
  | `ul`
  | `var`
  | `video`
  | `wbr`

export type CssSelector =
  | HTMLElementName
  | `.${string}`
  | `* ${string}`
  | `*`
  | `&::${`after` | `before`}`
  | `&:${`active` | `disabled` | `focus-within` | `focus` | `hover`}`
  | `&.${string}`
  | `&[type=${string}]`
  | `&#${string}`
  | `#${string}`
  | `+ ${string}`
  | `> ${string}`
  | `~ ${string}`
  | `${HTMLElementName} ${HTMLElementName}`
  | `${HTMLElementName}::${`after` | `before`}`
  | `${HTMLElementName}::${`first-letter` | `first-line`}`
  | `${HTMLElementName}::${`selection`}`
  | `${HTMLElementName}.${string}`
  | `${HTMLElementName}#${string}`
  | `input[type="${string}"]`

export type CssColorPropertyKeys =
  | `--color-${string}`
  | `background-color`
  | `background`
  | `border-bottom-color`
  | `border-color`
  | `border-left-color`
  | `border-right-color`
  | `border-top-color`
  | `border`
  | `box-shadow`
  | `caret-color`
  | `color`
  | `column-rule-color`
  | `column-rule`
  | `filter`
  | `opacity`
  | `outline-color`
  | `outline`
  | `text-decoration-color`
  | `text-decoration`
  | `text-shadow`

export type InteractiveMix = Record<InteractiveStates, Mix>

export type InteractiveSwatch = Record<InteractiveStates, Swatch>

export type InteractiveScheme = {
  root?: Mix
  filter?: Filter
  attributes: Partial<Record<CssColorPropertyKeys, InteractiveMix>>
  children?: Record<string, InteractiveScheme>
}

export type NonInteractiveScheme = {
  root?: Mix
  filter?: Filter
  attributes: Partial<Record<CssColorPropertyKeys, Mix>>
  children?: Record<string, Scheme>
}

export type Scheme = InteractiveScheme | NonInteractiveScheme

export type Swatch = { wet: LuumSpec; dry: Hex }

export type NonInteractivePalette<S extends NonInteractiveScheme> = {
  attributes: {
    [K in keyof S[`attributes`]]: Swatch
  }
  children?: S[`children`] extends undefined
    ? undefined
    : {
        [K in keyof S[`children`]]: S[`children`][K] extends NonInteractiveScheme
          ? NonInteractivePalette<S[`children`][K]>
          : S[`children`][K] extends InteractiveScheme
          ? InteractivePalette<S[`children`][K]>
          : never
      }
}

export type InteractivePalette<S extends InteractiveScheme> = {
  attributes: {
    [K in keyof S[`attributes`]]: InteractiveSwatch
  }
  children?: S[`children`] extends undefined
    ? undefined
    : {
        [K in keyof S[`children`]]: S[`children`][K] extends InteractiveScheme
          ? InteractivePalette<S[`children`][K]>
          : never
      }
}

export type Palette<S extends Scheme> = S extends NonInteractiveScheme
  ? NonInteractivePalette<S>
  : S extends InteractiveScheme
  ? InteractivePalette<S>
  : never

export interface FileScheme extends NonInteractiveScheme {
  file?: string
  root: Mix
}

export interface FilePalette<S extends FileScheme>
  extends NonInteractivePalette<S> {
  file: S[`file`] extends undefined ? undefined : string
}

// export default function paletteToScss(arg): string {
//   const { scheme = UI, filter = CMYK } =
//     typeof arg === `string` ? { hex: arg } : arg
//   const palette = paintScheme(scheme)
//   const scss = paletteToScssBlock(palette, filter)
//   return scss
// }

export * from "./export"
export * from "./import"
