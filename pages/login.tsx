import { NextSFC } from '../@types/next'
import Router from 'next/router'
import { useRef } from 'react'

import cookies from 'next-cookies'
import apiFetcher from '../helper/apiFetcher'
import { NextPageContext } from 'next'
import { IncomingHttpHeaders } from 'http2'
import { User } from '../@types/SQLresponse'
import styled from 'styled-components'

export interface LoginProps {
  headers: IncomingHttpHeaders
  loginCookie: string
}

const Login: NextSFC<LoginProps> = ({ headers }) => {
  const usernameField = useRef<HTMLInputElement>()
  const passwordField = useRef<HTMLInputElement>()

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
    location.replace(location.href.replace('/login', '/app'))
  }

  const Input = styled.input<{ filled?: boolean }>``
  const Label = styled.label<{}>``

  return (
    <main>
      <form>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          ref={usernameField}
          id="username"
          name="username"
          required
          aria-label="Username"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          ref={passwordField}
          id="password"
          name="password"
          required
          aria-label="Password"
        />
        <Input type="submit" value="Login" onClick={loginBtnClick} filled />
      </form>
    </main>
  )
}

Login.getInitialProps = async (ctx: NextPageContext) => {
  const { req, res } = ctx
  const loginCookie = cookies(ctx).loginCookie || ''

  if (loginCookie) {
    try {
      const user = await apiFetcher<User>(
        true,
        req.headers,
        `/api/infos?token=${loginCookie}`
      )
      if (user) {
        if (res) {
          res.writeHead(302, {
            Location: '/app',
          })
          res.end()
        } else {
          Router.push('/app')
        }
      }
    } catch (e) {}
  }

  return {
    headers: req.headers,
    loginCookie,
  }
}

export default Login
