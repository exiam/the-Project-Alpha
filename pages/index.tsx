import React from 'react'
import fetch from 'isomorphic-unfetch'
import { NextSFC } from '../@types/next'
import Highlight from 'react-highlight.js'
import { beautifier as JSONBeautifier } from '../utils/json'
import { config } from './types'
import Config from './components/config/config.component'

export interface IndexProps {
  configs: config[]
}

const Index: NextSFC<IndexProps> = ({ configs }) => (
  <main>
    <h1>The Project Alpha</h1>
    {configs.map(config => (
      <Config config={config} />
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
