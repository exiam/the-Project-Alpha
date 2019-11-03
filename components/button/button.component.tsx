import styled from 'styled-components'

interface Props {
  primary?: boolean
  color?: string
  hoverColor?: string
  large?: boolean | string
  size?: number
}

const getColor = (props: Props, defaultColor?: string) =>
  props.color || (defaultColor || '#07928B')
const getHoverColor = (props: Props, defaultHoverColor?: string): string =>
  props.hoverColor || (defaultHoverColor || '#056b66')

const getSize = ({ large, size }: Props): string => {
  if (size) return size.toString()
  let s: string | number = 200
  if (large) {
    if (typeof large == 'string') s = `calc(${2 * s + 'px ' + large}px)`
    else if (typeof large == 'boolean') s += s
  }

  return typeof s == 'number' ? s.toString() + 'px' : s
}

const Button = styled.button<Props>`
  background: ${p => (p.primary ? getColor(p) : 'transparent')};
  border: ${p => getColor(p)} solid 3px;
  border-radius: 5px;
  padding: 7.5px 15px;

  color: ${p => getColor(p, p.primary ? 'white' : undefined)};
  width: ${p => getSize(p)};
  margin: 6px;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: bold;

  transition-duration: 0.1s;
  box-shadow: none;
  transform: scale(1);

  &:hover,
  &:focus {
    background: ${p => getColor(p)};
    color: white;
    box-shadow: 3.5px 3.5px ${p => getHoverColor(p)};
  }
  &:active {
    background: ${p => getColor(p)};
    color: white;
    transform: scale(0.95);
  }
`

export default Button
