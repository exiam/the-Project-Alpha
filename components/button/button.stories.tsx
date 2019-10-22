import * as React from 'react'
import Button from './button.component'

export default { title: 'Button' }

export const primary = () => (
  <>
    <Button primary>Prim button</Button>
    <Button large primary>
      Prim button
    </Button>
  </>
)
export const secondary = () => (
  <>
    <Button>Second button</Button>
    <Button large>Second button</Button>
  </>
)
