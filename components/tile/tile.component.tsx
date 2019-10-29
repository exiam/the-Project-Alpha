import * as React from 'react'
import styled from 'styled-components'

interface TileContainerProps {
  color: string
  label: string
  phwl: boolean
}

const TileContainer = styled.a<TileContainerProps>`
  width: 150px;
  height: ${p => (!!p.label || p.phwl ? '200px' : '150px')};
  background: ${p => p.color};
  display: inline-flex;
  justify-content: space-around;
  padding: 10px;
  color: #f8f8f8;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
`
const TileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: contain;
  font-size: 120px;
`
const TileLabel = styled.span`
  font-size: 18px;
  font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: normal;
`

export interface TileProps {
  label?: string
  color?: string
  img?: string | JSX.Element
  preserveHeightWithoutLabel?: boolean
  fontIcon?: boolean
  href?: string
}

const Tile: React.SFC<TileProps> = ({
  color = '#68C281',
  label,
  img,
  fontIcon,
  preserveHeightWithoutLabel: phwl = false,
  href = '#',
}) => {
  return (
    <TileContainer href={href} phwl={phwl} color={color} label={label}>
      {img && typeof img == 'string' ? (
        <TileImage src={img} />
      ) : fontIcon ? (
        <TileImage as="span">{img}</TileImage>
      ) : (
        img
      )}
      {label && <TileLabel>{label}</TileLabel>}
    </TileContainer>
  )
}

export default Tile
