import React, { useState, useRef, useEffect } from 'react'
import { NextSFC } from '../@types/next'
import Highlight from 'react-highlight.js'
import { beautifier as JSONBeautifier } from '../utils/json'
import apiFetcher from '../helper/apiFetcher'
import SQLResponse, { User } from '../@types/SQLresponse'
import { IncomingHttpHeaders } from 'http'
import { NextPageContext } from 'next'
import cookies from 'next-cookies'

import styled from 'styled-components'

export interface config {
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
  const [configs, setConfigs] = useState<config[]>([])
  const [token, setToken] = useState<string>(loginCookie)
  const [user, setUser] = useState<false | User>(initialUser)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const usernameField = useRef<HTMLInputElement>()
  const passwordField = useRef<HTMLInputElement>()

  const loadUser = async () => {
    const data = await apiFetcher<User>(
      false,
      headers,
      `/api/infos?token=${token}`
    )
    setUser(data)
  }

  const loadData = async (
    headers: IncomingHttpHeaders,
    server: boolean,
    token: string
  ) =>
    token
      ? (await apiFetcher<{ configs: SQLResponse<config[]> }>(
          server,
          headers,
          `/api/config?token=${encodeURIComponent(token)}`
        )).configs.data
      : []

  useEffect(() => {
    setIsLoading(true)
    loadData(headers, false, token).then(d => {
      setConfigs(d)
      setIsLoading(false)
    })
  }, [token])

  const loginBtnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault()

    const { token, error } = await apiFetcher<{
      error?: string | any
      token?: string
    }>(false, headers, '/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: usernameField.current.value,
        password: passwordField.current.value,
      }),
    })
    if (error) return alert(error)

    document.cookie = `loginCookie=${token}; path=/`
    setToken(token)
    await loadUser()
  }
  const logoutBtnClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void => {
    e.preventDefault()

    document.cookie = `loginCookie=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
    setToken('')
    setUser(false)
    setConfigs([])
  }

  const Main = styled.main`
    div.zi-card {
      /*margin: 0;*/

      pre {
        padding: 0;
      }
    }
  `

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
        <form>
          <input type="text" ref={usernameField} required />
          <input type="password" ref={passwordField} required />
          <input type="submit" onClick={loginBtnClick} value="Login" />
        </form>
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
  const user = await apiFetcher<User>(
    true,
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
