import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Methods extends Component {
  render() {
    return (
      <div className="methods">
        <h1 className="pagetitle">Methods</h1>
        <p className="description">This section describes the output of Sandhands&apos;s methods. To see the more about the sanitation format please see <Link to="/Sandhands/format">here</Link>.</p>
        <div className="method section">
          <h2 className="name">Sanitize</h2>
          <p className="description">Throws the first error found in the input.</p>
          <code className="example">{
`import {sanitize} from 'sandhands'

sanitize(1, String) // throws error with message "Invalid Type"
sanitize(14, {_: Number, min: 22}) // throws error with message "Too small"`
          }</code>
        </div>
        <div className="method section">
          <h2 className="name">Valid</h2>
          <p className="description">Returns a boolean repesenting whether or not the input matched the format.</p>
          <code className="example">{
`import {valid} from 'sandhands' // or const {valid} = require('sandhands')

console.log(valid(12, String)) // false
console.log(valid('', String)) // false (the default minimum string length is 1)
console.log(valid('foo bar', String)) // true`
          }</code>
        </div>
        <div className="method section">
          <h2 className="name">Details</h2>
          <p className="description">Returns a array/object representing where and what the errors are dependant upon the format</p>
          <code className="example">{
`import {details} from 'sandhands'

console.log(details(12, String)) // "Invalid Type"
console.log(details('', String)) // "Too short"
console.log(details('foo bar', String)) // null
console.log(details({a: 24}, {a: String, b: String})) // {a: "Expected String", b: "Property Required"}`
          }</code>
        </div>
        <div className="method section">
          <h2 className="name">Set Default</h2>
          <p className="description">Set the default options for any data type</p>
          <code className="example">{
`import {setDefault, valid} from 'sandhands'
console.log(valid('', String)) // returns false because the default minimum length for strings is 1
setDefault(String, {minLength: 0})
console.log(valid('', String)) // returns true because we've now lowered the minimum length to 0`
          }</code>
        </div>
        <div className="method section">
          <h2 className="name">Custom Format</h2>
          <p className="description">Set a custom format</p>
          <code className="example">{
`import {valid, customFormat} from 'sandhands'
customFormat('ticketNumber', {_: Number, min: 1000, max: 2000})
console.log(valid(12, 'ticketNumber')) // false
console.log(valid(1532, 'ticketNumber')) // true
consooe.log(valid(1523, {_: 'ticketNumber', even: true})) // false`
          }</code>
        </div>
        <div className="method section">
          <h2 className="name">Sandhands Express</h2>
          <p className="description">The express middleware allows you to seamlessly sanitize your inputs. You must also use a body parsing library in conjunction to set the req.body to be sanitized.</h2>
          <code className="example">{
`const server = require('express')()
const {sandhandsExpress} = require('sandhands')
const bodyParser = require('body-parser')

server.use(bodyParser.json())

server.post('/register', sandhandsExpress({
  username: 'username',
  email: 'email',
  password: 'password'
}))

server.post('/register', (req, res) => {
  console.log('Got Registration Details', req.body)
  res.send('Registered')
})

server.listen(8050, err => {
  if (err) return console.log(err)
  console.log(`Server Running.}`)
})`
          }</code>
        </div>
      </div>
    )
  }
}

export default {path: '/Sandhands/methods', exact: true, component: Methods}
