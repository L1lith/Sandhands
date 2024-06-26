import React, { Component } from 'react'
import Link from 'next/link'
import Highlight from 'react-highlight'

class Exports extends Component {
  render() {
    return (
      <div className="exports">
        <h1 className="pagetitle">Exports</h1>
        <p className="description">
          This section describes the usage of Sandhands&apos;s exports. To see the more about the
          sanitation format please see <Link href="/format.html">here</Link>.
        </p>
        <div id="sanitize" className="export section">
          <h2 className="name">Sanitize</h2>
          <p className="description">Throws the first error found in the input.</p>
          <Highlight className="javascript example">{`const {sanitize} = require('sandhands')

sanitize(1, String) // throws error with message "Invalid Type"
sanitize(14, {_: Number, min: 22}) // throws error with message "Too small"`}</Highlight>
        </div>
        <div id="valid" className="export section">
          <h2 className="name">Valid</h2>
          <p className="description">
            Returns a boolean repesenting whether or not the input matched the format.
          </p>
          <Highlight className="javascript example">{`const {valid} = require('sandhands')

console.log(valid(12, String)) // false
console.log(valid('', String)) // false (the default minimum string length is 1)
console.log(valid('foo bar', String)) // true`}</Highlight>
        </div>
        <div id="details" className="export section">
          <h2 className="name">Details</h2>
          <p className="description">
            Returns a array/object representing where and what the errors are dependant upon the
            format
          </p>
          <Highlight className="javascript example">{`const {details} = require('sandhands')

console.log(details(12, String)) // "Invalid Type"
console.log(details('', String)) // "Too short"
console.log(details('foo bar', String)) // null
console.log(details({a: 24}, {a: String, b: String})) // {a: "Expected String", b: "Property Required"}`}</Highlight>
        </div>
        <div id="format" className="export section">
          <h2 className="name">Format</h2>
          <p className="description">
            Shorthand for creating formats that have options. This can be useful for writing inline
            options.
          </p>
          <Highlight className="javascript Example">
            {`import {details, Format, F} from 'sandhands'

console.log(details('Mixed Case', Format(String).lowercase())) // "Lowercase Only"
console.log(details('myname@jef.com', F(String).email().minLength(25))) // "Too short"
console.log(details({name: Format(String).lowerCase()})) // Also writeable as {_: String, lowercase: true}`}
          </Highlight>
        </div>
        <div id="set-default" className="export section">
          <h2 className="name">Set Default</h2>
          <p className="description">Set the default options for any data type</p>
          <Highlight className="javascript example">{`const {setDefault, valid} = require('sandhands')
console.log(valid('', String)) // returns false because the default minimum length for strings is 1
setDefault(String, {minLength: 0})
console.log(valid('', String)) // returns true because we've now lowered the minimum length to 0`}</Highlight>
        </div>
        <div id="custom-format" className="export section">
          <h2 className="name">Custom Format</h2>
          <p className="description">
            Set a custom format. The default custom formats can be found{' '}
            <a href="https://github.com/L1lith/Sandhands/blob/master/source/customFormats.js">
              here
            </a>
            , but they can be overriden.
          </p>
          <Highlight className="javascript example">{`const {valid, customFormat} = require('sandhands')
customFormat('ticketNumber', {_: Number, min: 1000, max: 2000})
console.log(valid(12, 'ticketNumber')) // false
console.log(valid(1532, 'ticketNumber')) // true
consooe.log(valid(1523, {_: 'ticketNumber', even: true})) // false`}</Highlight>
        </div>
        <div id="sandhands-express" className="export section">
          <h2 className="name">Sandhands Express</h2>
          <p className="description">
            The express middleware allows you to seamlessly sanitize your inputs. You must also use
            a body parsing library in conjunction to set the req.body to be sanitized.
          </p>
          <Highlight className="javascript example">{`const server = require('express')()
const {sandhandsExpress} = require('sandhands')
const bodyParser = require('body-parser')

server.use(bodyParser.json())

server.post('/register', sandhandsExpress({
  username: 'username',
  email: 'email',
  password: 'password'
}), (req, res) => {
  console.log('Got Registration Details', req.body)
  res.send('Registered')
})

server.listen(8050, err => {
  if (err) return console.log(err)
  console.log("Server Running.")
})`}</Highlight>
        </div>
      </div>
    )
  }
}

export default Exports
