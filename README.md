<img src="https://raw.githubusercontent.com/l1lith/Sandhands/master/logo/no-background.svg?sanitize=true" width="100" height="100">

# Sandhands ![License](https://img.shields.io/badge/license-MIT-blue.svg) ![NPM Version](https://img.shields.io/npm/v/sandhands.svg?style=flat)
Expressive Javascript Sanitation, Zero Dependencies.

Please read our Docs 😊 Sandhands is a big passion project of mine, and I think you could love it too! Need help or want to talk about it? Message me on Discord! Lilith#7915

## [Documentation](https://l1lith.github.io/Sandhands/home)

## Important Notice: Arrays
There has been a number of issues plaguing the Array format, and for that I apologize. Worry no more! With the release of v1.6.0 I've fixed these issues, and to ensure there are no future issues I've also written a test suite! Sweet!

## Example Usage
```
import {sanitize, valid, details} from 'sandhands'

valid(12, String) // returns false
sanitize(12, String) // throws error with message "Invalid Type"
details(12, String) // returns "Invalid Type"
```

## Working With Express
Sandhands has built-in support for Express!
```js
...
server.post('/register', sandhandsExpress({
  username: 'username',
  email: 'email',
  password: 'password'
}), (req, res) => {
  console.log('Got Registration Details', req.body)
  res.send('Registered')
})
```
To see the full example please [visit this page.](https://l1lith.github.io/Sandhands/methods.html)

## Forms
Sandhands has a sister library [SandForms](https://github.com/L1lith/SandForms) for straightforward form management which uses Sandhands internally.
