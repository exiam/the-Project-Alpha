import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Nav from '../components/nav/nav.component'

const theme = {}
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <Nav></Nav>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}
export default MyApp
