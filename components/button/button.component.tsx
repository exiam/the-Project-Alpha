import styled from 'styled-components'

import './button.style.css'

interface IProps {
  primary?: boolean
  color?: string
  large?: boolean
  size?: number
}

const getColor = (props: IProps, defaultColor?: string | false): string =>
  props.color || defaultColor || '#07928B'

const getSize = ({ large, size }: IProps): number => {
  if (size) return size
  const s = 200
  if (large) return s * 2

  return s
}
const Config = styled.button<IProps>`
  background: ${p => (p.primary ? getColor(p) : 'transparent')};
  border: ${p => getColor(p)} solid 3px;
  border-radius: 5px;
  padding: 7.5px 15px;

  color: ${p => getColor(p, p.primary ? 'white' : false)};
  width: ${p => getSize(p)}px;
  margin: 6px;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: bold;
`

export default Config
