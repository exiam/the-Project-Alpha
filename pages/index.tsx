import React from 'react'
import fetch from 'isomorphic-unfetch'
import { NextSFC } from '../@types/next'
import Highlight from 'react-highlight.js'
import { beautifier as JSONBeautifier } from '../utils/json'

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
  configs?: config[]
}

const Index: NextSFC<IndexProps> = ({ configs }) => (
  <main>
    <h1>The Project Alpha</h1>
    {configs
      ? configs.map(config => (
          <div key={config.ID}>
            <h3>
              {config.DisplayName}({config.FileName})
            </h3>
            <Highlight language={config.FileFormat}>
              {config.FileFormat == 'json'
                ? JSONBeautifier(config.Data)
                : config.Data}
            </Highlight>
          </div>
        ))
      : null}
  </main>
)

Index.getInitialProps = async ({ req }) => {
  const protocol =
    'http:' /*req
    ? `${req.headers['x-forwarded-proto']}:`
    : location.protocol*/
  const host =
    (req ? req.headers['x-forwarded-host'] : location.host) || 'localhost:3000'

  const { data: configs } = await fetch(`${protocol}//${host}/api/config`).then(
    r => r.json()
  )
  return { configs }
}
export default Index
