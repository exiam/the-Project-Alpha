import { getFunction } from './config'

import dotEnvLoad from 'dotenv-load'

describe('dotEnv', () => {
  beforeAll(() => dotEnvLoad())
  it('should have environment variables needed', () => {
    expect(process.env).toHaveProperty(['NEXT_PUBLIC_MYSQL_HOST'])
    expect(process.env).toHaveProperty(['NEXT_PUBLIC_MYSQL_DATABASE'])
    expect(process.env).toHaveProperty(['NEXT_PUBLIC_MYSQL_USER'])
    expect(process.env).toHaveProperty(['NEXT_PUBLIC_MYSQL_PASSWORD'])
  })
})
describe('GET config', () => {
  beforeAll(() => dotEnvLoad())
  it('should give me a result', async () => {
    const res = await expect(getFunction()).resolves
    res.not.toBeUndefined()
    res.not.toBeFalsy()
    res.not.toBeNull()
  })
  it('should give me a result well formated', async () => {
    const res = await expect(getFunction()).resolves
    await res.toHaveProperty(['error'])
    await res.toHaveProperty(['data'])
  })
})
