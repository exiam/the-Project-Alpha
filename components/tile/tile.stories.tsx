import * as React from 'react'
import Tile from './tile.component'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import ReactIcon from './React.png'

export default { title: 'Tile' }

export const WithLabel = () => <Tile img={ReactIcon} label="Tile with label" />
export const WithoutLabel = () => <Tile img={ReactIcon} />
export const WithoutLabelPreserveHeight = () => (
  <Tile img={ReactIcon} preserveHeightWithoutLabel />
)
