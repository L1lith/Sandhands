const express = require('express')
const sandhands = require('sandhands').middleware.express
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use('/', sandhands({email: {_: String, email: true}}))

const port = 8050

app.listen(port, err => {
  if (err) return console.log(err)
  console.log(`Server running on Port #${port}`)
})
