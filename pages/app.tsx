import Router from 'next/router'
import React, { useState, useEffect } from 'react'
import { NextSFC, SQLResponse, User } from '../@types'
import Highlight from 'react-highlight.js'
import { beautifier as JSONBeautifier } from '../utils/json'
import apiFetcher from '../helper/apiFetcher'
import { IncomingHttpHeaders } from 'http'
import { NextPageContext } from 'next'
import cookies from 'next-cookies'

import styled from 'styled-components'

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

  const Main = styled.main``

  return (
    <Main>
      <h1>The Project Alpha</h1>
      {token ? (
        user ? (
          <>
            <span>{user.DisplayName}</span>
            <span>{user.Username[0].toUpperCase()}</span>
            <button onClick={logoutBtnClick}>Log out</button>
          </>
        ) : (
          <button onClick={logoutBtnClick}>Log out</button>
        )
      ) : (
        <form></form>
      )}
      {isLoading ? <div>Loading ...</div> : <></>}

      {configs.map(config => (
        <div key={config.ID}>
          {' '}
          <h3>
            {config.DisplayName}({config.FileName})
          </h3>
          <Highlight language={config.FileFormat}>
            {config.FileFormat == 'json'
              ? JSONBeautifier(config.Data)
              : config.Data}
          </Highlight>
        </div>
      ))}
    </Main>
  )
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  const loginCookie = cookies(ctx).loginCookie || ''

  if (!loginCookie) {
    const { res } = ctx
    if (res) {
      res.writeHead(302, {
        Location: '/login',
      })
      res.end()
    } else {
      Router.push('/login')
    }
  }

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
