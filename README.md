<img src="https://raw.githubusercontent.com/l1lith/Sandhands/master/logo/no-background.svg?sanitize=true" width="100" height="100">

# Sandhands ![License](https://img.shields.io/badge/license-MIT-blue.svg) ![NPM Version](https://img.shields.io/npm/v/sandhands.svg?style=flat)
Sanitize, don't let your computer get sick. Handle your JS data sanitation effectively and accurately with Sandhands.

Please read our Docs 😊 Sandhands is a big passion project of mine, and I think you could love it too! Feel free to open an issue or make a pull request :)

## [Documentation](https://l1lith.github.io/Sandhands/home)

## A note on Boolean Logic
Boolean logic is currently bugged while using the Format constructor. I'm not sure why this is so please be aware and understanding of this.

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
  username: 'username', // the 'username' string is an alias for the special username custom format. See here for a list of existing custom formats https://github.com/L1lith/Sandhands/blob/master/source/customFormats.js
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
