import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Format extends Component {
  render() {
    return (
      <div className="format">
        <h1 className="pagetitle">Format</h1>
        <p className="description">This section describes the format input used by Sandhands which defines how it should sanitize the input.</p>
        <div className="primitives section">
          <h2 className="name">Primitives Basics</h2>
          Null and undefined can be passed in as is, and it will expect strict equality.
          <code>{
`import {valid} from 'sandhands'

valid('', null) // false
valid(undefined, null) // false
valid(null, null) // true

valid('', undefined) // false
valid(null, undefined') // false
valid(undefined, undefined) // true`
          }</code>
          Numbers, Strings, and Booleans can be passed in by using their class names.
          <code>{
`import {valid} from 'sandhands'

valid(12, String) // false
valid(String, String) // false
valid('hello world', String) // true

valid('ganondorf', Number) // false
valid(Number, Number) // false
valid(42, Number) // true`
          }</code>
        </div>
        <div className="options section">
          <h2 className="name">Options</h2>
          <p className="description">All data types have a set of default options which accompany them. We can override the defaults with our own arguments two different ways<br/>The first way is we can pass the options as the third argument after the format to the method.</p>
          <code>{
`import {valid} from 'sandhands'

console.log(valid('hello', String, {minLength: 8})) // false
console.log(valid('hello world', String, {minLength: 8})) // true`
         }</code>
          <p className="description">The second way to pass options is inside the format itself. We use a special object syntax to designate this:</p>
          <code>{
`import valid from 'sandhands'

console.log(valid("Lily", {_: String, lowercase: true})) // false
console.log(valid("lily", {_: String, lowercase: true})) // true`
         }</code>
         </div>
         <div className="strings section">
            <h2 className="name">Strings</h2>
            <p className="description">The following options are available for strings:</p>
            <div className="option">
              <h3 className="name">email</h3>
              <p className="description">Flag as true to required the string be a valid email.</p>
            </div>
            <div className="option">
              <h3 className="name">lower</h3>
              <p className="description">Flag as true to required the string be lowercase.</p>
            </div>
            <div className="option">
              <h3 className="name">upper</h3>
              <p className="description">Flag as true to required the string be uppercase.</p>
            </div>
            <div className="option">
              <h3 className="name">minLength</h3>
              <p className="description">Set the minimum required length of the string. Default is 1</p>
            </div>
            <div className="option">
              <h3 className="name">maxLength</h3>
              <p className="description">Set the maximum required length of the string.</p>
            </div>
            <div className="option">
              <h3 className="name">length</h3>
              <p className="description">Set the exact required length of the string.</p>
            </div>
            <div className="option">
              <h3 className="name">allowed</h3>
              <p className="description">Set a string to whitelist the input string.</p>
            </div>
            <div className="option">
              <h3 className="name">banned</h3>
              <p className="description">Set a string to blacklist the input string.</p>
            </div>
            <div className="option">
              <h3 className="name">whitespace</h3>
              <p className="description">Flag as false to require the string to contain no spaces.</p>
            </div>
         </div>
         <div className="numbers section">
            <h2 className="name">Numbers</h2>
            
         </div>
    </div>
    )
  }
}

export default {path: '/format', exact: true, component: Format}
