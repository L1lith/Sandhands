# Sandhands
Expressive Javascript Sanitation, Zero Dependencies.

## [Documentation](https://l1lith.github.io/Sandhands/)

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
details(12, String) // returns ["Invalid Type"]
```

## Update Logs

#### Version 1.3.21
Minor Change to middleware behavior, null values from arrays and objects are stripped out.

#### Version 1.3.2 - Middleware!
Sandhands now has middleware support, starting with express!

#### Version 1.3.12 - Sanitize Method Fixed
There was a reference error in the sanitize method causing it to fail completely. This has been fixed.

#### Version 1.3.1 - setDefault
A new method called setDefault has been introduced. It allows you to override the default settings for each data type.

#### Version 1.3.0 - Readability, Array Support, Details, Validation
The entire codebase has been drastically reorganized for much better readability. More support for Arrays has been introduced. Potentially breaking changes (most users will be unaffected) from the last have also been introduced to the library (the result of the detail function is now different, however the sanitize and validate functions remain the same). More format validation has been introduced. Error messages are now more detailed.
