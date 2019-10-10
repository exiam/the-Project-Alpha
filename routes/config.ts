import { query } from '../lib/db'
import sql, { SQLStatement } from 'sql-template-strings'
import { NextApiRequest, NextApiResponse } from 'next'
import Joi from '@hapi/joi'
/**
 * Handle GET Requests on /api/config
 * @param {number | undefined} limit limit the number of elements
 * @returns {object} see example response
 * @exports
 * {
 *  "data": [
 *    {
 *      "ID": 1,
 *      "UserID": 1,
 *      "DisplayName": "Prettier",
 *      "Date": "2019-10-05T22:00:00.000Z",
 *      "Type": "prettier_config",
 *      "FileFormat": "json",
 *      "FileName": ".prettierrc",
 *      "Data": "{\"trailingComma\":\"es5\",\"tabWidth\":2,\"singleQuote\":true,\"semi\":false}"
 *    }
 *  ]
 *}
 */
export const getFunction = (limit?: number) => {
  let q: SQLStatement
  if (!limit) {
    q = sql`
    SELECT *
    FROM config
  `
  } else {
    q = sql`
    SELECT *
    FROM config
    LIMIT ${limit}
  `
  }
  return query(q)
}
/**
 * Handle GET Requests on /api/config
 * @param {NextApiRequest} req Request
 * @param {NextApiResponse} req Response
 */

export const getRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const limit =
    req.query && req.query.limit && !Array.isArray(req.query.limit)
      ? parseInt(req.query.limit)
      : undefined
  const configs = await getFunction(limit)

  if (configs.error) {
    res.status(500).json(configs)
  } else {
    res.status(200).json(configs)
  }
}

/**
 * Handle POSTS Requests on /api/config
 * @param {NextApiResponse} req Request
 * @param {NextApiResponse} req Response
 */

export const postRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const schema = Joi.object({
    UserID: Joi.number()
      .required()
      .integer()
      .not(Joi.number().negative()),
    DisplayName: Joi.string()
      .required()
      .max(255)
      .min(3),
    Date: Joi.date().required(),
    Type: Joi.string()
      .required()
      .min(3)
      .max(30),
    FileFormat: Joi.string()
      .lowercase()
      .optional()
      .default(null)
      .max(30)
      .min(0),
    FileName: Joi.string()
      .required()
      .min(1)
      .max(30),
    Data: Joi.string().required(),
  })

  const {
    error,
    value: {
      UserID,
      DisplayName,
      Date: CreationDate,
      Type,
      FileFormat,
      FileName,
      Data,
    },
  } = schema.validate(req.body)
  if (error) return res.status(400).json({ error: error.details })
  const configs = await query(sql`
  INSERT INTO \`config\` (\`ID\`, \`UserID\`, \`DisplayName\`, \`Date\`, \`Type\`, \`FileFormat\`, \`FileName\`, \`Data\`) VALUES 
  (NULL, ${UserID}, ${DisplayName}, ${CreationDate}, ${Type}, ${FileFormat ||
    null}, ${FileName}, ${Data})
  `)

  if (configs.error) res.status(500).json(configs)
  else res.status(200).json(configs)
}
