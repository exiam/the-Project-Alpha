import * as React from 'react'
import Nav from './nav.component'
import { User } from '../../@types'

export default { title: 'Navigation' }
const sampleUser: User = {
  ID: 1,
  Username: 'hugos29',
  DisplayName: 'Test User',
  Email: 'test@user.com',
  RegistrationDate: new Date().toString(),
  Password: '123456789',
}
export const Connected = () => <Nav connected={sampleUser}></Nav>
export const NotConnected = () => <Nav connected={false}></Nav>
