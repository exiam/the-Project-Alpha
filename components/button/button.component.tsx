import styled from 'styled-components'

interface IProps {
  primary?: boolean
  color?: string
  hoverColor?: string
  large?: boolean
  size?: number
}

const getColor = (props: IProps, defaultColor: string = '#07928B'): string =>
  props.color || defaultColor
const getHoverColor = (
  props: IProps,
  defaultHoverColor: string = '#056b66'
): string => props.hoverColor || defaultHoverColor

const getSize = ({ large, size }: IProps): number => {
  if (size) return size
  const s = 200
  if (large) return s * 2

  return s
}

const Button = styled.button<IProps>`
  background: ${p => (p.primary ? getColor(p) : 'transparent')};
  border: ${p => getColor(p)} solid 3px;
  border-radius: 5px;
  padding: 7.5px 15px;

  color: ${p => getColor(p, p.primary ? 'white' : undefined)};
  width: ${p => getSize(p)}px;
  margin: 6px;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: bold;

  transition-duration: 0.3s;
  box-shadow: none;

  &:hover,
  &:focus {
    background: ${p => getColor(p)};
    color: white;
    box-shadow: 3.5px 3.5px ${p => getHoverColor(p)};
  }
  &:active {
    background: ${p => getColor(p)};
    color: white;
    box-shadow: 5.5px 5.5px ${p => getHoverColor(p)};
  }
`

export default Button
