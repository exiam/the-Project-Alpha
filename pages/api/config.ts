import { NextApiRequest, NextApiResponse } from 'next'
import { getFunction, postFunction } from '../../routes/config'

export default function(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getFunction(req, res)

    case 'POST':
      return postFunction(req, res)

    default:
      return getFunction(req, res)
  }
}
