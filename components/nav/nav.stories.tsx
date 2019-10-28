import * as React from 'react'
import Nav from './nav.component'

export default { title: 'Navigation' }

export const Connected = () => <Nav storybook connected></Nav>
export const NotConnected = () => <Nav storybook></Nav>
