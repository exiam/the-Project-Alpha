import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export interface listItem {
  href: string
  name: string
  id: number | string
  primary?: boolean
}

export interface NavProps {
  connected?: boolean
  items?: listItem[]
  logoText?: string
  storybook?: boolean
}

const NavContainer = styled.nav<{ connected: boolean }>`
  display: flex;
  justify-content: center;
  font-weight: 400;
  align-items: center;
  height: 45px;
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

const NavLogo = styled.h3`
  color: #fcfcfc;
  font-size: 20pt;
  font-weight: 400;
  letter-spacing: 0.8pt;

  &:hover {
    font-weight: 500;
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
  font-size: 16pt;
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
const NavlistitemlinkandNextLink: React.SFC<{
  primary?: boolean
  href: string
  connected: boolean
}> = ({ primary, href, children, connected }) => (
  <Link href={href}>
    <Navlistitemlink connected={connected} primary={primary}>
      {children}
    </Navlistitemlink>
  </Link>
)

const NavItem: React.SFC<
  listItem & { storybook: boolean; connected: boolean }
> = ({ id, name, href, primary, storybook, connected }) => {
  const LinkElement = storybook ? Navlistitemlink : NavlistitemlinkandNextLink
  return (
    <Navlistitem>
      <LinkElement href={href} primary={primary} connected={connected}>
        {name}
      </LinkElement>
    </Navlistitem>
  )
}

const defaultItems: listItem[] = [
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
const connectedItems: listItem[] = [
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
  storybook,
}) => {
  const listItems = items || (connected ? connectedItems : defaultItems)

  return (
    <NavContainer connected={connected}>
      <NavContainer2>
        <NavLogo>{logoText}</NavLogo>
        <NavItems>
          {listItems.map(item => (
            <NavItem
              key={item.id}
              storybook={storybook}
              connected={connected}
              {...item}
            />
          ))}
        </NavItems>
      </NavContainer2>
    </NavContainer>
  )
}

export default Nav
