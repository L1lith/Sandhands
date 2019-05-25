<img src="https://raw.githubusercontent.com/l1lith/Sandhands/master/logo/no-background.svg?sanitize=true" width="100" height="100">

# Sandhands ![License](https://img.shields.io/badge/license-MIT-blue.svg) ![NPM Version](https://img.shields.io/npm/v/sandhands.svg?style=flat)
Expressive Javascript Sanitation, Zero Dependencies.

## [Documentation](https://l1lith.github.io/Sandhands/)

## [Updates](https://github.com/L1lith/Sandhands/blob/master/UPDATES.md)

## [Discord](https://discord.gg/ugBT4XR)

## Installation
To install Sandhands run the following command:

```
npm i -s sandhands
```

## Example Usage
```
import {sanitize, valid, details} from 'sandhands'

valid(12, String) // returns false
sanitize(12, String) // throws error with message "Invalid Type"
details(12, String) // returns "Invalid Type"
```

## Forms
Sandhands has a sister library [SandForms](https://github.com/L1lith/SandForms) for straightforward form management which uses Sandhands internally.
