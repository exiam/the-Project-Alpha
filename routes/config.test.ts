import { getFunction } from './config'

describe('Config Route', () => {
  test('dotEnv', () => {
    expect(process.env).toHaveProperty(['NEXT_PUBLIC_MYSQL_HOST'])
    expect(process.env).toHaveProperty(['NEXT_PUBLIC_MYSQL_DATABASE'])
    expect(process.env).toHaveProperty(['NEXT_PUBLIC_MYSQL_USER'])
    expect(process.env).toHaveProperty(['NEXT_PUBLIC_MYSQL_PASSWORD'])
  })

  /*
  describe('GET config', () => {
    console.log(process.env)
    beforeAll(async () => (result = await getFunction()))
    let result = null
    it('should give me a result', () => {
      expect(result).not.toBe(false)
      expect(result).not.toBeUndefined()
      expect(result).not.toBeFalsy()
      expect(result).not.toBeNull()
      expect(result).not.toHaveProperty('error')
      expect(result).toHaveProperty('data')
    })
    it('should give me a result well formated', () => {
      expect(result).not.toHaveProperty('error')
      expect(result).toHaveProperty('data')
      expect(result.data).not.toBe(false)
      expect(result.data).not.toBeUndefined()
      expect(result.data).not.toBeFalsy()
      expect(result.data).not.toBeNull()
    })
  })*/
})
