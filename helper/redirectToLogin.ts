import Router from 'next/router'
import { PageCtx } from '../@types'

export default function({ res }: PageCtx): void {
  if (res) {
    res.writeHead(302, {
      Location: '/login',
    })
    res.end()
  } else {
    Router.push('/login')
  }
}
