import * as React from 'react'
import styled from 'styled-components'
import { User } from '../../@types'
import { findColor } from '../../utils/color'

export interface ListItem {
  href: string
  name: string
  id: number | string
  primary?: boolean
}

export interface NavProps {
  connected: false | User
  items?: ListItem[]
  logoText?: string
}

const NavContainer = styled.nav<{ connected: boolean }>`
  display: flex;
  justify-content: center;
  font-weight: 400;
  align-items: center;
  height: 40px;
  font-family: 'Fira Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: ${p =>
    !p.connected ? 'linear-gradient(to left, #07928B, #36AB8A)' : '#0C7983'};
`
const NavContainer2 = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
`

const NavLogoH3 = styled.h3`
  a {
    color: #fcfcfc;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.8pt;
    text-decoration: none;

    &:hover {
      font-weight: 500;
    }
  }
`
const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 50%;
`
const Navlistitem = styled.li`
  height: 100%;
  list-style: none;
`
const Navlistitemlink = styled.a<{ primary: boolean; connected: boolean }>`
  font-size: 18px;
  color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 0 10px;
  transition-duration: 0.1s;
  background-color: ${p =>
    p.primary ? (p.connected ? '#256071' : '#0C7983') : 'transparent'};
  height: 100%;
  text-decoration: none;

  &:hover {
    background: ${p => (p.connected ? '#2f4858' : '#256071')};
  }
`

const NavItem: React.SFC<ListItem & { connected: boolean }> = ({
  name,
  href,
  primary,
  connected,
}) => {
  return (
    <Navlistitem>
      <Navlistitemlink href={href} primary={primary} connected={connected}>
        {name}
      </Navlistitemlink>
    </Navlistitem>
  )
}

const NavLogo: React.SFC<{ href?: string }> = ({ children, href = '/' }) => (
  <NavLogoH3>
    <a href={href}>{children}</a>
  </NavLogoH3>
)

const UserCircle = styled.a<{ color: string }>`
  display: flex;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${p => p.color};
  font-weight: bolder;
  font-family: 'DM Serif Display', 'DM Serif Text', serif;
  font-size: 20px;
  color: black;
  text-decoration: none;
`

const defaultItems: ListItem[] = [
  {
    id: 'doc',
    name: 'Documentation',
    href: '/documentation',
  },
  {
    id: 'getting-started',
    name: 'Getting started',
    href: '/getting-started',
    primary: true,
  },
]
const connectedItems: ListItem[] = [
  {
    id: 'app',
    name: 'Dashboard',
    href: '/app',
  },
  ...defaultItems,
]

const Nav: React.SFC<NavProps> = ({
  connected = false,
  items,
  logoText = 'The Project αlphα',
}) => {
  const listItems = items || (connected ? connectedItems : defaultItems)
  const letters =
    connected &&
    connected.DisplayName.split(' ')
      .map(c => c.toUpperCase()[0])
      .join('')
  return (
    <NavContainer connected={!!connected}>
      <NavContainer2>
        <NavLogo>{logoText}</NavLogo>
        <NavItems>
          {listItems.map(item => (
            <NavItem key={item.id} connected={!!connected} {...item} />
          ))}
          {connected && (
            <UserCircle href="/app" color={findColor(letters)}>
              {letters}
            </UserCircle>
          )}
        </NavItems>
      </NavContainer2>
    </NavContainer>
  )
}

export default Nav
