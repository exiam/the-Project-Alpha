const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
dotenvLoad()

const CSS = require('@zeit/next-css')
module.exports = CSS(nextEnv({}))
