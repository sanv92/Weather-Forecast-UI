const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()
const { MOCK_PORT, BACKEND_PORT } = process.env


app.use('/api/*', proxy({ target: `http://localhost:${BACKEND_PORT}`, changeOrigin: true }))

console.log('MOCK PORT: ', MOCK_PORT)
app.listen(MOCK_PORT)
