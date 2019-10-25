import * as React from 'react'
import GroupBox from './groupbox.component'

export default { title: 'Group Box' }

export const BreakEnd = () => <GroupBox moreHref="#" name="BreakEnd GroupBox" />
export const GrandientEnd = () => (
  <GroupBox moreHref="#" gradient name="GrandientEnd GroupBox" />
)

export const BreakEndWithOverlayText = () => (
  <GroupBox
    moreHref="#"
    overlayText="See more"
    name="BreakEnd with overlay text GroupBox"
  />
)
export const GrandientEndWithOverlayText = () => (
  <GroupBox
    moreHref="#"
    overlayText="See more"
    gradient
    name="GrandientEnd with overlay text GroupBox"
  />
)
