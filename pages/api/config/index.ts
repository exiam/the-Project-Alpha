import { NextApiRequest, NextApiResponse } from 'next'
import GET from '../../../routes/config/GET'
import POST from '../../../routes/config/POST'

export default async function(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await GET(req, res)
    case 'POST':
      await POST(req, res)
    default:
      await GET(req, res)
  }
}
