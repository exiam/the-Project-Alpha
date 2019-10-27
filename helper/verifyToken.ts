import JWT from 'jsonwebtoken'
import { User } from '../@types'

export default async function(
  token: string | undefined
): Promise<false | User> {
  if (!token) return false

  const valid = JWT.verify(token, process.env.NEXT_PUBLIC_SECRET_PASSPHRASE)
  if (!valid) return false

  const decoded = JWT.decode(token) as User
  return decoded
}
