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

console.log(details(12, String)) // ["Invalid Type"]
console.log(details('', String)) // ["Too short"]
console.log(details('foo bar', String)) // []
console.log(details({a: 24}, {a: String, b: String})) // { _: ["Property Missing"], a: ["Invalid Type"] }`
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
      </div>
    )
  }
}

export default {path: '/Sandhands/methods', exact: true, component: Methods}
