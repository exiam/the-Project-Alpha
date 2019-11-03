import React, { useState, useEffect } from 'react'
import { NextSFC, SQLResponse, User } from '../@types'
import apiFetcher from '../helper/apiFetcher'
import { IncomingHttpHeaders } from 'http'
import { NextPageContext } from 'next'
import cookies from 'next-cookies'

import redirectToLogin from '../helper/redirectToLogin'
import { Container } from '../components/layout'
import Tile from '../components/tile/tile.component'
import { FaReact } from 'react-icons/fa'
import GroupBox from '../components/groupbox/groupbox.component'

export interface Config {
  ID: 1
  UserID: 1
  DisplayName: string
  Date: string
  Type: string
  FileFormat: string
  FileName: string
  Data: string
}

export interface IndexProps {
  headers: IncomingHttpHeaders
  loginCookie: string
  initialUser: User | false
}

const Index: NextSFC<IndexProps> = ({ headers, loginCookie, initialUser }) => {
  const [configs, setConfigs] = useState<Config[]>([])
  const [token, setToken] = useState<string>(loginCookie)
  const [user, setUser] = useState<false | User>(initialUser)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loadData = async (
    headers: IncomingHttpHeaders,
    server: boolean,
    token: string
  ) =>
    token
      ? (await apiFetcher<{ configs: SQLResponse<Config[]> }>(
          server,
          headers,
          `/api/config?token=${encodeURIComponent(token)}`
        )).configs.data
      : []

  useEffect(() => {
    if (!token) location.replace(location.href.replace('/app', '/login'))

    setIsLoading(true)
    loadData(headers, false, token).then(d => {
      setConfigs(d)
      setIsLoading(false)
    })
  }, [token])

  const logoutBtnClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void => {
    e.preventDefault()

    document.cookie =
      'loginCookie=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    setToken('')
    setUser(false)
    setConfigs([])
  }

  return (
    <Container>
      {token ? (
        user ? (
          <div>
            <span>{user.DisplayName}</span>
            <button onClick={logoutBtnClick}>Log out</button>
          </div>
        ) : (
          <div>
            <button onClick={logoutBtnClick}>Log out</button>
          </div>
        )
      ) : null}
      {isLoading ? <div>Loading ...</div> : null}
      <GroupBox name="My configuration files" width={300}>
        {configs.map(config => (
          <Tile
            key={config.ID}
            label={config.DisplayName}
            img={<FaReact />}
            fontIcon
            href={`/configs/${config.ID}`}
          />
        ))}
      </GroupBox>
    </Container>
  )
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  const loginCookie = cookies(ctx).loginCookie

  if (!loginCookie) redirectToLogin(ctx)

  const user = await apiFetcher<User>(
    !!ctx.req,
    ctx.req.headers,
    `/api/infos?token=${loginCookie}`
  )

  return {
    headers: ctx.req.headers,
    loginCookie,
    initialUser: user,
  }
}
export default Index
