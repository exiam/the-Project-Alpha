import _colors from './colors.json'

export function brightness(col: string, amt: number): string {
  let usePound = false

  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export const colors = Object.keys(_colors).map(cs => _colors[cs]['300'])

export type gradColor = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export function findColor(letter: string, grad: gradColor = 300): string {
  const colors = Object.keys(_colors).map(cs => _colors[cs][grad.toString()])
  const numberFromText = (text: string) =>
    parseInt(
      text
        .split('')
        .map(chr => chr.charCodeAt(0))
        .join(''),
      10
    )

  return colors[numberFromText(letter) % colors.length]
}
