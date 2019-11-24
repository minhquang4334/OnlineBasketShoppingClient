'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  api_host: '"http://localhost:3000"',
  token_cookie: '"jwt_access"',
  storage_host: '"http://localhost:3000"',
})
