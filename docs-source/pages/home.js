import React, { Component } from 'react'
import Link from 'next/Link'
import '../styles/home.less'
import Highlight from 'react-highlight'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>Getting started with Sandhands</h2>
                <p>
                    Sandhands is used to sanitize all kinds of arbitarily complex user input! Make sure to check out the {' '}
                    <li>
                        <Link href="/format.html"><a>Format section</a></Link>
                    </li>{' '}
                    and{' '}
                    <li>
                        <Link href="/sandbox.html"><a>play around with the sandbox!</a></Link>
                    </li>
                </p>
                <h2>A Basic Express Example</h2>
              <Highlight className="javascript example">{`const express = require('express')
const {sandhandsExpress} = require('sandhands')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/register', sandhandsExpress({
  username: 'username',
  email: 'email',
  password: 'password'
}), (req, res) => {
  console.log('Got Registration Details', req.body)
  res.send('Registered')
})

const port = 8050

app.listen(port, err => {
  if (err) return console.log(err)
  console.log(\`Server running on Port #\$\{port\}\`)
})`}</Highlight>
            </div>
        )
    }
}

export default Home
