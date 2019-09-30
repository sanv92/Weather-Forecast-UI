const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()


app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port)
