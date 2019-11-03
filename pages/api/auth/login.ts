import { NextApiRequest, NextApiResponse } from 'next'
import Joi from '@hapi/joi'
import JWT from 'jsonwebtoken'
import mysql from 'sql-template-strings'
import { query } from '../../../lib/db'
import bcrypt from 'bcrypt'
import { User } from '../../../@types'

export interface LoginBody {
  username: string
  password: string
}

export default async function(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.NEXT_PUBLIC_SECRET_PASSPHRASE)
    return res.status(500).json({ error: 'Missing passphrase' })
  if (req.method != 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  if (!req.body || Object.keys(req.body).length < 0)
    return res.status(400).json({ error: 'Request body is required' })
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })

  const { error, value } = schema.validate<LoginBody>(req.body)

  if (error) return res.status(406).json({ error: error.details[0].message })

  const q = await query<User>(mysql`
  SELECT * FROM user
  WHERE
  Username=${value.username}
  LIMIT 1
  `)

  if (Object.keys(q.error).length > 0)
    return res.status(500).json({ error: q.error })

  if (q.data.length == 0)
    return res.status(200).json({ error: 'Invalid username' })

  const {
    ID,
    RegistrationDate,
    Username,
    DisplayName,
    Email,
    Password,
  } = q.data[0]
  const validPass = await bcrypt.compare(value.password, Password)
  if (!validPass) return res.status(200).json({ error: 'Invalid password' })

  const token = JWT.sign(
    { ID, RegistrationDate, Username, DisplayName, Email },
    process.env.NEXT_PUBLIC_SECRET_PASSPHRASE
  )

  res.status(200).json({ token })
}
