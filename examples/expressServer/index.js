const express = require('express')
const sandhands = require('sandhands').middleware.express
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/register', sandhands({email: {_: String, email: true}, username: {_: String, allowed: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-0123456789"}, password: String}))

app.post('/register', (req, res) => {
  console.log('Got Registration Details', req.body)
  res.send('Registered')
})

const port = 8050

app.listen(port, err => {
  if (err) return console.log(err)
  console.log(`Server running on Port #${port}`)
})
