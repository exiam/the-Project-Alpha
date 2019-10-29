import App, { AppContext } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Nav from '../components/nav/nav.component'
import { User } from '../@types'
import cookies from 'next-cookies'
import apiFetcher from '../helper/apiFetcher'

const theme = {}
class MyApp extends App<{ user?: User }> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const loginCookie = cookies(ctx).loginCookie

    let user: User

    if (loginCookie)
      user = await apiFetcher<User>(
        !!ctx.req,
        ctx.req.headers,
        `/api/infos?token=${loginCookie}`
      )

    return { pageProps, user }
  }

  render() {
    const { Component, pageProps, user } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <Nav connected={user || false} />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}
export default MyApp
