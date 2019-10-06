import mysql from 'serverless-mysql'
import { SQLStatement } from 'sql-template-strings'

export const db = mysql({
  config: {
    host: process.env.next_public_mysql_host,
    database: process.env.next_public_mysql_database,
    user: process.env.next_public_mysql_user,
    password: process.env.next_public_mysql_password,
  },
})

export interface QueryResult {
  error?: any
  data?: any
}

export const query = async (
  query: string | SQLStatement
): Promise<QueryResult> => {
  try {
    const data = await db.query(query)
    await db.end()
    return { data }
  } catch (error) {
    return { error }
  }
}
