import { NextApiRequest, NextApiResponse } from 'next'
import verifyToken from '../../helper/verifyToken'
import { User } from '../../@types'

export default async function(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  if (!req.query || !req.query.token || Array.isArray(req.query.token))
    return res.status(400).json({ error: 'Token is needed' })
  let user, error
  try {
    user = await verifyToken(req.query.token)
  } catch (e) {
    user = false
    error = e
  }
  if (!user) return res.status(401).json({ error: error || 'Unauthorized' })
  const { DisplayName, Username, Email, RegistrationDate, ID }: User = user

  res.status(200).json({ ID, DisplayName, Username, Email, RegistrationDate })
}
