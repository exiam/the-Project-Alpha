import styled from 'styled-components'
import React from 'react'

export interface ElementProps {
  color?: Color
}

export type Props = ElementProps & { text?: string }

export enum Color {
  good = '#68C281',
  none = '#07928B',
  error = '#E53935',
}

const TextFieldLabel = styled.label<ElementProps>`
  display: inline-block;
  color: ${p => p.color};
  font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 16px;
  transform: translateX(10px);
`
const TextFieldInput = styled.input<ElementProps>`
  display: flex;
  background: whitesmoke;
  justify-content: center;
  align-items: center;
  color: ${p => p.color};
  border: 4px solid ${p => p.color};
  border-radius: 10px;
  height: 35px;
  line-height: 30px;
  font-size: 16px;
  padding: 0 8px;
  font-weight: 400;
  transform: translateX(-8px);
  font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const TextField = React.forwardRef<HTMLInputElement, Props>(function TextField(
  { color = Color.none, text = '' },
  ref
) {
  return (
    <TextFieldLabel color={color}>
      {text.toUpperCase()}
      <TextFieldInput color={color} ref={ref} type="text" />
    </TextFieldLabel>
  )
})

export default TextField
