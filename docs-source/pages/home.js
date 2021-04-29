import React, { Component } from 'react'
import Link from 'next/link'
import '../styles/home.less'
import Highlight from 'react-highlight'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Getting started with Sandhands</h1>
        <br />
        <p>
          Sandhands is used to sanitize all kinds of data in JS! Make sure to check out the{' '}
          <li>
            <Link href="/format.html">
              <a>Format section</a>
            </Link>
          </li>{' '}
          and{' '}
          <li>
            <Link href="/sandbox.html">
              <a>play around with the sandbox!</a>
            </Link>
          </li>
          <br />
          <br />
          You can provide all kinds of arbitarily complex data structures, including blends of
          Objects, Arrays, Primitives, and more with a simple syntax. The{' '}
          <Link href="/format.html">
            <a>format</a>
          </Link>{' '}
          input allows you to define what kind of data you want to provide strictly. The{' '}
          <Link href="/exports.html">
            <a>exports</a>
          </Link>{' '}
          include a set of functions exported by the library that allows you to choose what you
          would like to happen after sanitation is performed, as well as some other variety
          features.
        </p>
        <br />
        <br />
        <h2>A Basic Express Example</h2>
        Sandhands provides integrated support for working with express, making it perfect for
        protecting your endpoints
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
