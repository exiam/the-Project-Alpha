import * as React from 'react'
import { NextPageContext } from 'next'

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
export interface SQLResponse<R> {
  data: R
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
}

export interface User {
  ID: number
  RegistrationDate: string
  Username: string
  DisplayName: string
  Email: string
  Password: string
}

export type PageCtx<Q = {}> = NextPageContext & {
  query?: Q
}

export interface NextSFC<Props, Query = {}> extends React.SFC<Props> {
  getInitialProps?: (ctx: PageCtx<Query>) => Promise<Props | void>
}
