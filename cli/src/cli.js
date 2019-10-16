import { red } from 'kleur'
import execute, { add, setDefault } from './helper/functions'
import fetch from 'node-fetch'
import boxen from 'boxen'

export async function cli(params) {
  console.log('OK')
  add('get', async params => {
    console.log('OK2')
    const res = await fetch(
      'https://theprojectalpha.hugos29.now.sh/api/config'
    ).then(r => r.json())
    console.log(res)
    res &&
      res.data &&
      Array.isArray(res.data) &&
      res.data.forEach(
        conf => conf.DisplayName && console.log(red(boxen(conf.DisplayName)))
      )
  })

  setDefault(p => red().bgWhite(`${p[2]} is not a command`))

  return execute(params)
}
