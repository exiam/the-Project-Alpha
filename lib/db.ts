import mysql from 'serverless-mysql'
import { SQLStatement } from 'sql-template-strings'

export const db = mysql({
  config: {
    host: process.env.NEXT_PUBLIC_MYSQL_HOST,
    database: process.env.NEXT_PUBLIC_MYSQL_DATABASE,
    user: process.env.NEXT_PUBLIC_MYSQL_USER,
    password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
  },
})

export interface QueryResult {
  error?: any
  data?: any
}

export const query = async (
  query: string | SQLStatement
): Promise<QueryResult> => {
  const error = {}
  const data = {}
  if (
    process.env.NEXT_PUBLIC_MYSQL_HOST &&
    process.env.NEXT_PUBLIC_MYSQL_DATABASE &&
    process.env.NEXT_PUBLIC_MYSQL_USER &&
    process.env.NEXT_PUBLIC_MYSQL_PASSWORD
  ) {
    try {
      const data = await db.query(query)
      await db.end()
      return { data, error }
    } catch (error) {
      return { data, error }
    }
  } else {
    const error = 'Missing ENV variables'
    return { data, error }
  }
}
