# Sandhands ![NPM Version](https://img.shields.io/npm/v/sandhands.svg?style=flat) ![NPM Downloads](https://img.shields.io/npm/dy/sandhands?style=flat) ![GitHub Created At](https://img.shields.io/github/created-at/L1lith/Sandhands) ![GitHub Repo stars](https://img.shields.io/github/stars/L1lith/Sandhands)
<img alt="a pair of hands holding sand which is flowing through the fingers" src="https://raw.githubusercontent.com/l1lith/Sandhands/master/logo/logo.svg?sanitize=true"  width="183"  height="200">

Sanitize, don't let your database get sick. Handle your JS data sanitation effectively and accurately with Sandhands.

Please read our Docs 😊 Sandhands is a big passion project of mine, and I think you could love it too! Feel free to open an issue or make a pull request :)

#### Over 200 test cases!

## [Documentation](https://l1lith.github.io/Sandhands/home)

## What is Sandhands useful for?

Sandhands is a general purpose library that ensures your data is structured the way it's supposed to be. This can be useful for web servers especially, but this library is also useful for almost any use case.

For example when scripting something you stumble upon a variable that is misbehaving and you want to ensure it is what you think it is. Simply use the "sanitize" method as a one line check that will halt execution immediately if you're not getting the data you expected. The built in support for express also makes endpoint JSON validation an absolute breeze.

## Sandhands vs Typescript

Sandhands takes a different approach to validation than Typescript. Typescript is a modification to the language itself, and Sandhands is just a library that can check types during runtime.

Sandhands is my preferred type checking solution because it's less intrusive to your coding environment, and I only need to enforce type checks at specific places. Additionally Sandhands is capable of performing checks during runtime which Typescript is not (as it is transpiled to JS before deployment).

Typescript is a much better solution if you'd like to enforce the type of everything all the time. Or you could use both for the ultimate type scrutiny, though this library's TS support is currently broken (pull requests welcome!)

## A notice about the License
This library's license has been changed from MIT to ESMIT (my custom environmentally friendly version of MIT). Going forward all users are required (under the extent of the law) to use the ESMIT license regardless of the version of the library you use.

## Basic Exports

```js
import {sanitize, valid, details} from 'sandhands'

valid(12, String) // returns false
sanitize(12, String) // throws error with message "Invalid Type"
details(12, String) // returns "Invalid Type"
```

## More Advanced Usage

We can also provide sanitation for more advanced data structures like objects

```js
import {sanitize} from 'sandhands'

sanitize({name: "Timmy", age: 25, favoriteColor: 'yellow'}, {name: String, age: Number, favoriteColor: String}) // Doesn't throw any errors
sanitize({name: "jake", age: 23, favoriteColor: true}, {name: String, age: Number, favoriteColor: String}) // Throws the error "Error: Expected String"
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

To see the full example please [visit this page.](https://l1lith.github.io/Sandhands/exports#sandhands-express)

## Forms

Sandhands has a sister library [SandForms](https://github.com/L1lith/SandForms) for straightforward form management which uses Sandhands internally.
