import React from 'react'
import fetch from 'isomorphic-unfetch'
import { Config, NextSFC } from '../@types'
import ConfigComponent from '../components/config/config.component'

export interface IndexProps {
  configs: Config[]
}

const Index: NextSFC<IndexProps> = ({ configs }) => (
  <main>
    <h1>The Project Alpha</h1>
    {configs.map(config => (
      <ConfigComponent key={config.ID} config={config} />
    ))}
  </main>
)

Index.getInitialProps = async ({ req }) => {
  const protocol = req
    ? `${req.headers['x-forwarded-proto']}:`
    : location.protocol
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `${protocol}//${host}/api/config`
  const res = await fetch(pageRequest)
  const json = await res.json()
  return { configs: json.data || [] }
}
export default Index
