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
  jest.setTimeout(30000)
  beforeAll(() => dotEnvLoad())
  it('should give me a result', async () => {
    await expect(getFunction(1)).resolves.not.toBeUndefined()
    await expect(getFunction(1)).resolves.not.toBeNull()
  })
  it('should give me a result well formated', async () => {
    await expect(getFunction(1)).resolves.toHaveProperty(['error'])
    await expect(getFunction(1)).resolves.toHaveProperty(['data'])
  })
})
