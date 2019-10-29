import * as React from 'react'
import { Container, Title } from '../../components/layout'
import { NextSFC, Config } from '../../@types'
import fetchApi from '../../helper/apiFetcher'
import cookies from 'next-cookies'
import redirectToLogin from '../../helper/redirectToLogin'
import ErrorPage from 'next/error'
import Highlight from 'react-highlight.js'
import { beautifier as JSONBeautifier } from '../../utils/json'
import '../../static/code.css'
export interface ConfigProps {
  configs: Config[]
}

const ConfigElement: NextSFC<ConfigProps, { id: number }> = ({ configs }) => {
  if (!configs[0]) return <ErrorPage statusCode={404} />
  const config: Config = configs[0]
  return (
    <Container
      container1Props={{
        addStyles: `
      pre {
        min-width: 50%;
      }
    `,
      }}
    >
      <Title style={{ margin: '10vh 0' }}>{config.DisplayName}</Title>
      <Highlight language={config.FileFormat}>
        {config.FileFormat == 'json'
          ? JSONBeautifier(config.Data)
          : config.Data}
      </Highlight>
    </Container>
  )
}

ConfigElement.getInitialProps = async ctx => {
  const { query, req } = ctx
  const token = cookies(ctx).loginCookie
  if (!token) redirectToLogin(ctx)

  const { configs } = await fetchApi<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    configs: { data: Config[]; error: any }
  }>(!!req, req.headers, `/api/config?id=${query.id}&token=${token}`)

  return { configs: configs.data }
}

export default ConfigElement
