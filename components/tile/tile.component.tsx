import * as React from 'react'
import styled from 'styled-components'

const TileContainer = styled.a<{
  color: string
  label: string
  phwl: boolean
}>`
  width: 150px;
  height: ${p => (!!p.label || p.phwl ? '200px' : '150px')};
  background: ${p => p.color};
  display: inline-flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`
const TileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: contain;
`
const TileLabel = styled.span`
  font-size: 18px;
  font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: normal;
  color: #f8f8f8;
`

export interface TileProps {
  label?: string
  color?: string
  img?: string
  preserveHeightWithoutLabel?: boolean
}

const Tile: React.SFC<TileProps> = ({
  color = '#68C281',
  label,
  img,
  preserveHeightWithoutLabel: phwl = false,
}) => {
  return (
    <TileContainer phwl={phwl} color={color} label={label}>
      {img && <TileImage src={img} />}
      {label && <TileLabel>{label}</TileLabel>}{' '}
    </TileContainer>
  )
}

export default Tile
