<img src="https://raw.githubusercontent.com/l1lith/Sandhands/master/logo/no-background.svg?sanitize=true" width="100" height="100">

# Sandhands ![License](https://img.shields.io/badge/license-MIT-blue.svg) ![NPM Version](https://img.shields.io/npm/v/sandhands.svg?style=flat)
Sanitize, don't let your computer get sick. Handle your JS data sanitation effectively and accurately with Sandhands.

Please read our Docs 😊 Sandhands is a big passion project of mine, and I think you could love it too! Need help or want to talk about it? Message me on Discord! Lilith#7915

## [Documentation](https://l1lith.github.io/Sandhands/home)

## Update V1.7.0 Fresh Feature: Boolean Logic
I've just implemented boolean logic inside of Sandhands, and to ensure it works correctly I've included a new set of tests! There's now 138 total tests :D

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
