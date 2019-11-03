const ENV = require('next-env')
const IMAGES = require('next-images')
const dotenvLoad = require('dotenv-load')
const CSS = require('@zeit/next-css')
dotenvLoad()

module.exports = CSS(ENV(IMAGES({})))
