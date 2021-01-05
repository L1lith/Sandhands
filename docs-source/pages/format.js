import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Highlight from 'react-highlight'
import '../styles/format.less'

class Format extends Component {
  render() {
    return (
      <div className="format">
        <h1 className="pagetitle">Format</h1>
        <p className="description">
          This section describes the format (the sanitation schema) we give to Sandhands to define
          how it should sanitize the input.
        </p>
        <div id="primitives" className="primitives section">
          <h2 className="name">Primitives Basics</h2>
          <p className="description">
            Null and undefined can be passed in as is, and it will expect strict equality.
          </p>
          <Highlight className="javascript">{`const {valid} = require('sandhands')

valid('', null) // false
valid(undefined, null) // false
valid(null, null) // true

valid('', undefined) // false
valid(null, undefined) // false
valid(undefined, undefined) // true`}</Highlight>
          <p className="description">
            Numbers, Strings, and Booleans can be passed in by using their class names.
          </p>
          <Highlight className="javascript">{`const {valid} = require('sandhands')

valid(12, String) // false
valid(String, String) // false
valid('hello world', String) // true

valid('ganondorf', Number) // false
valid(Number, Number) // false
valid(42, Number) // true`}</Highlight>
        </div>
        <div id="options" className="options section">
          <h2 className="name">Options</h2>
          <p className="description">
            All data types have a set of default options which accompany them. We can override the
            defaults with our own arguments two different ways
            <br />
            The first way is we can pass the options as the third argument after the format to the
            method.
          </p>
          <Highlight className="javascript">{`const {valid} = require('sandhands')

console.log(valid('hello', String, {minLength: 8})) // false
console.log(valid('hello world', String, {minLength: 8})) // true`}</Highlight>
          <p className="description">
            The second way to pass options is inside the format itself. We use a special object
            syntax to designate this:
          </p>
          <Highlight className="javascript">{`const {valid} = require('sandhands')

console.log(valid("Lily", {_: String, lowercase: true})) // false
console.log(valid("lily", {_: String, lowercase: true})) // true`}</Highlight>
        </div>
        <div id="strings" className="strings section">
          <h2 className="name">Strings</h2>
          <p className="description">The following options are available for strings:</p>
          <div className="option">
            <h3 className="name">email</h3>
            <p className="description">Flag as true to required the string be a valid email.</p>
          </div>
          <div className="option">
            <h3 className="name">lowercase</h3>
            <p className="description">Flag as true to required the string be lowercase.</p>
          </div>
          <div className="option">
            <h3 className="name">uppercase</h3>
            <p className="description">Flag as true to required the string be uppercase.</p>
          </div>
          <div className="option">
            <h3 className="name">minLength</h3>
            <p className="description">Set the minimum required length of the string. Default: 1</p>
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
            <p className="description">
              Flag as false to require the string to contain no whitespaces.
            </p>
          </div>
          <div className="option">
            <h3 className="name">regex</h3>
            <p className="description">Set a regular expression to test the input string.</p>
          </div>
          <div className="option">
            <h3 className="name">trimmed</h3>
            <p className="description">
              Flag as true to require the string to not begin or end with whitespace.
            </p>
          </div>
        </div>
        <div id="numbers" className="numbers section">
          <h2 className="name">Numbers</h2>
          <div className="option">
            <h3 className="name">integer</h3>
            <p className="description">Flag as true to require whole numbers. Default: false</p>
          </div>
          <div className="option">
            <h3 className="name">allowNaN</h3>
            <p className="description">Flag as true to allow NaN. Default: false</p>
          </div>
          <div className="option">
            <h3 className="name">finite</h3>
            <p className="description">Flag as false to allow Infinity. Default: true</p>
          </div>
          <div className="option">
            <h3 className="name">min</h3>
            <p className="description">Set the minimum value of the input</p>
          </div>
          <div className="option">
            <h3 className="name">max</h3>
            <p className="description">Set the maximum value of the input</p>
          </div>
          <div className="option">
            <h3 className="name">even</h3>
            <p className="description">Flag as true to require even numbers.</p>
          </div>
          <div className="option">
            <h3 className="name">odd</h3>
            <p className="description">Flag as true to require odd numbers.</p>
          </div>
        </div>
        <div id="objects" className="object section">
          <h2 className="name">Objects</h2>
          <p className="description">
            We can sanitize objects by creating our own object representing how we expect the input
            to be formatted.
          </p>
          <div className="option">
            <h3 className="name">strict</h3>
            <p className="description">
              Flag as true to require all input values to be defined by the format in order to be
              valid (unless flagged as optional). This also prevents the user from providing their
              own additional properties. Default: true
            </p>
          </div>
          <div className="option">
            <h3 className="name">allOptional</h3>
            <p className="description">Flag as true to make all of the properties optional</p>
          </div>
          <div className="option">
            <h3 className="name">optionalProps</h3>
            <p className="description">
              Provide an array of property names (strings) to designate which properties are
              optional.
            </p>
          </div>
          <Highlight className="javascript">{`const {valid} = require('sandhands')

console.log(valid({}, {})) // true
console.log(valid({}, {a: String})) // false
console.log(valid({a: 'hello world'}, {a: String})) // true
console.log(valid({}, {_: {a: String}, optionalProps: ["a"]})) // true
console.log(valid({b: 12}, {})) // false
console.log(valid({b: 12}, {}, {strict: false})) // true`}</Highlight>
        </div>
        <div id="arrays" className="array section">
          <h2 className="name">Arrays</h2>
          <p className="description">
            We can sanitize arrays by creating our own array representing how we expect the input to
            be formatted. The default array behavior might seem confusing at first, however once you
            understand it in practice it is simple and expressive.
          </p>
          <div className="option">
            <h3 className="name">standard</h3>
            <p className="description">Manually set the standard to use for all array values</p>
          </div>
          <div className="option">
            <h3 className="name">firstAsStandard</h3>
            <p className="description">
              Flag as true to splice the first element of the format array and use it to validate
              all values of the input array that are not explicitly defined by the format array. The
              values of all of the format array are all shifted to the left by one index. Default:
              true if the array length is equal to 1
            </p>
          </div>
          <div className="option">
            <h3 className="name">strict</h3>
            <p className="description">
              Flag as true to require all array indexs to be defined by the format in order to be
              valid. Default: true if the format length is at least 1
            </p>
          </div>
          <div className="option">
            <h3 className="name">minLength</h3>
            <p className="description">
              Set the minimum required length of the array. Default: 1 unless the format array is
              empty and there is no standard.
            </p>
          </div>
          <div className="option">
            <h3 className="name">maxLength</h3>
            <p className="description">Set the maximum length of the array.</p>
          </div>
          <div className="option">
            <h3 className="name">length</h3>
            <p className="description">Set the exact required length of the array.</p>
          </div>
          <Highlight className="javascript">{`const {valid} = require('sandhands')

console.log(valid([], [])) // true
console.log(valid([], [Number])) // true - Because the format array is only one element long the first value is set as the firstAsStandard format, and strict is not assumed to be true.
console.log(valid([12], [Number])) // true
console.log(valid([54, 25], [Number])) // true - As you can see
console.log(valid([12, 12], [Number, Number])) // true - Because the format array is longer than one element firstAsStandard is not assumed and strict is set to true.

console.log(valid([52, 63, 14], [Number, Number])) // false - Because strict is assumed extra array elements will cause validation to fail.

console.log(valid(['a', 15, 25], {_:[Number, String], firstAsStandard: true})) // true - We can also use firstAsStandard alongside with specific formats for certain array indexes by setting it explicitly in the inline options. The first index (Number) will be the standard format for all indexes, and the second index will now become the beginning of the array of custom formats for specific indexes, meaning the first array index will be expected to be a string, and all following indexes will be expected to be numbers.`}</Highlight>
        </div>
        <div id="universal" className="universal section">
          <h2 className="name">Universal Options</h2>
          <div className="option">
            <h3 className="name">validate</h3>
            <p className="description">
              Expects a function or array of functions to compare the input with. If any don't
              return true, reject the input.
            </p>
          </div>
          <div className="option">
            <h3 className="name">equalTo</h3>
            <p className="description">
              Expects the input to be strictly equal (using the === operator) to the value of the
              equalTo option.
            </p>
          </div>
        </div>
        <div className="numbers section">
          <h2 className="name">All</h2>
          <p className="description">
            The All format is a special class we can import that acts as a wildcard. Please be
            careful with this as any kind of dangerous input could be passed. Please only use this
            if you know what you are doing.
          </p>
          <Highlight className="javascript">{`const {valid, All} = require('sandhands')

console.log(valid("Hello :)", All)) // true
console.log(valid(Infinity, All)) // true
console.log(valid({a: 'hello world', b: 12}, {a: String, b: All})) // true`}</Highlight>
        </div>
      </div>
    )
  }
}

export default Format
