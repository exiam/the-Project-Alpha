import { query } from '../../lib/db'
import sql, { SQLStatement } from 'sql-template-strings'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Handle GET Requests on /api/config
 * @param {NextApiResponse} req Request
 * @param {NextApiResponse} req Response
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { limit } = req.query
  let q: SQLStatement
  if (!limit || Array.isArray(limit)) {
    q = sql`
    SELECT *
    FROM config
  `
  } else {
    q = sql`
    SELECT *
    FROM config
    LIMIT ${parseInt(limit)}
  `
  }
  const configs = await query(q)

  if (configs.error) res.status(500).json(configs)
  else res.status(200).json(configs)
}

/* Example response
{
  "data": [
    {
      "ID": 1,
      "UserID": 1,
      "DisplayName": "Prettier",
      "Date": "2019-10-05T22:00:00.000Z",
      "Type": "prettier_config",
      "FileFormat": "json",
      "FileName": ".prettierrc",
      "Data": "{\"trailingComma\":\"es5\",\"tabWidth\":2,\"singleQuote\":true,\"semi\":false}"
    }
  ]
}
*/
