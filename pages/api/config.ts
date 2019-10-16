import { NextApiRequest, NextApiResponse } from 'next'
import { postRoute, getRoute } from '../../routes/config'

export default function(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getRoute(req, res)

    case 'POST':
      return postRoute(req, res)

    default:
      return getRoute(req, res)
  }
}
