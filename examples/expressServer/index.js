const express = require('express')
const { sandhandsExpress } = require('sandhands')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post(
  '/register',
  sandhandsExpress({
    username: 'username',
    email: 'email',
    password: 'password'
  }),
  (req, res) => {
    console.log('Got Registration Details', req.body)
    res.send('Registered')
  }
)

const port = 8050

app.listen(port, err => {
  if (err) return console.log(err)
  console.log(`Server running on Port #${port}`)
})
