import { normalizeHex, hexToChannels } from "../src/import"

test(`validateHex: empty string throws error`, () => {
  const input = ``
  expect(() => normalizeHex(input)).toThrow()
})

test(`hexToChannels: signed hex to {RGB} (red)`, () => {
  const input = `#ff0000`
  const expected = {
    R: 255,
    G: 0,
    B: 0,
  }
  expect(hexToChannels(input)).toMatchObject(expected)
})

test(`hexToChannels: unsigned hex to {RGB} (green)`, () => {
  const input = `00ff00`
  const expected = {
    R: 0,
    G: 255,
    B: 0,
  }
  expect(hexToChannels(input)).toMatchObject(expected)
})

test(`hexToChannels: mini hex to {RGB} (grey)`, () => {
  const input = `#333`
  const expected = {
    R: 51,
    G: 51,
    B: 51,
  }
  expect(hexToChannels(input)).toMatchObject(expected)
})

test(`hexToChannels: mini hex to {RGB} (red)`, () => {
  const input = `#f00`
  const expected = {
    R: 255,
    G: 0,
    B: 0,
  }
  expect(hexToChannels(input)).toMatchObject(expected)
})
