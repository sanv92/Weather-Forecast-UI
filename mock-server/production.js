const path = require('path')
const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()
const { PORT, BACKEND_PORT } = process.env
const DIST = (__dirname, '..', 'dist')

app.use(express.static(path.join(DIST), { index: false, extensions: ['html'] }))
app.use('/api/*', proxy({ target: `http://localhost:${BACKEND_PORT}`, changeOrigin: true }))

app.get('*', (req, res) => {
  res.sendfile(path.join(DIST, 'index.html'))
})

console.log('PORT: ', PORT)
app.listen(PORT)
