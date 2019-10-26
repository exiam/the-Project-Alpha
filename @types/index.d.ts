import * as React from 'react'
import { DocumentContext } from 'next/document'
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

export interface NextSFC<Props> extends React.SFC<Props> {
  getInitialProps: (ctx: DocumentContext | NextPageContext) => Promise<Props>
}
