const withPlugins = require('next-compose-plugins')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

module.exports = withPlugins([nextEnv()], {})
