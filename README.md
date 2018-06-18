# Sandhands
Expressive Javascript Sanitation

### Usage Examples
#### Valid
```js
const {valid} = require('sandhands')

// Strings
console.log(valid('Hello World', String)) // true
console.log(valid('', String)) // false (By default the mimimum string length is 1)
console.log(valid('Foo', String, {email: true})) // false
console.log(valid('foo@bar.com', String, {email: true})) // true

// Numbers
console.log(valid(12, Number)) // true
console.log(valid(NaN, Number)) // false
console.log(valid(Infinity, Number)) // false
console.log(valid(Infinity, Number, {finite: false}) // true
console.log(valid('12', Number)) // false

// Other Primitives
console.log(valid(undefined, undefined)) // true
console.log(valid(null, undefined)) // false
console.log(valid(null, null)) // true

// Objects
console.log(valid(12, {}) // false
console.log(valid({}, {})) // true
console.log(valid({}, {b: String})) // false
console.log(valid({b: 'Tomato'}, {b: String})) // true
console.log(valid({x: 54}, {}, {strict: false})) // true
console.log(valid({x: 64}, {})) // false
console.log(valid({x: 54}, {}, {strict: false})) // true
console.log(valid({}, {f: {_: String, optional: true}})) // true
```
