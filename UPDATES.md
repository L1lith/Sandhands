# Updates

### 1.8.9
Fixed a bug where the equalTo wasn't strict as specified in the docs. It is now strict, and the deepEqualTo option has been added for deep equality support. Test cases have also been updated for both options

### 1.8.8
Added the reconstructFormat function which allows you to take a resolved format and turn it back into a normal usable format. This is sort of like an AST for Sandhands formats (though the structure is not deep so you must implement recursion yourself), allowing you to un-parse, modify, and re-parse formats on the fly.

### 1.8.5
Added the resolveFormat function which allows you to reduce a format object into it's individual components. The reduceFormat function was also added. It reduces a format to it's simplest representation (this is not currently deep in the case of objects and arrays). Additionally, our primary bundler has been changed from webpack to microbundle as microbundle provides better functionality out of the box.

### 1.8.4
Fixed a bug with the strict flag being assigned when using the Object constructor, and finished implementing support for using object options when sanitizing functions (as functions are basically objects throughout.) Added support for expecting objects to be members of a class.

#### 1.8.3
I added a new universal option called "nullable". Setting this as true will allow you to accept null instead of the provided format, hence making your format "nullable".

### 1.8.2
Hammered out more bugs and disabled a small broken feature. Added more tests, we're at 148 now :) Additionally a small change has been made to add the optionalProps and the allOptional props to objects, and to remove the optional flag from properties so that optionals are always at the same level as their format for clarity.

## 1.8.0
Stability/Security Update. All of the dependencies have been updated and some minor bugs have been fixed.

#### 1.7.1
Created the getFormatErrors to see if there is an issue with your format (note: this is completely unnecessary as your format is checked for validation when sanitation is performed). As of the date of the update there is currently no tests for this function.

### 1.7.0
I've just implemented boolean logic inside of Sandhands, and to ensure it works correctly I've included a new set of tests! There's now 138 total tests :D

### 1.6.5
Implemented a deepEqual function when comparing with the equalTo option, and added some tests for equalTo

#### 1.6.4
Support supplying the Function class to indicate a function is expected

#### 1.6.1
Support the standard option for objects :)

### 1.6.0
Fixed more breaking bugs in the Array format, should be working now :)

#### 1.3.8
Fix major bug breaking array format and slightly change array format so that arrays using explicit or implied firstAsStandard option now have a default minimum length of 1

#### 1.3.73
Improve whitespace flag and create new trimmed flag.

##### 1.3.64
Add support for deep format shorthand.

##### 1.3.63
Fix bugs with the format shorthand.

#### 1.3.6
Create format shorthand.

##### 1.3.52
Fix custom formats.
##### 1.3.51
Improve Array format further
#### 1.3.5
Implement and document new array formats (minLength, length, maxLength), and modify array behavior (default minLength of 1 usually).

##### 1.3.43
Reorganize express middleware export

##### 1.3.425
Further improve array strict default by defaulting to true when the array length is not 1

##### 1.3.42
Default strict to true in arrays when the array length is greater than 1.

##### 1.3.41
Fix issue/reorganize interpretCustomFormats call
#### 1.3.4 - Details Object/Array output
The details function no longer returns null property placeholder values.

##### 1.3.32 - Validation Functions
Validation functions can now return either an error string or a success boolean. Standard username custom format has also been updated.

##### 1.3.31 - Standard Custom Formats
Add the username and password standard custom format.

#### 1.3.3 - Custom Formats
Sandhands now supports custom formats!

##### 1.3.21
Minor Change to middleware behavior, null values from arrays and objects are stripped out.

#### 1.3.2 - Middleware!
Sandhands now has middleware support, starting with express!

##### 1.3.12 - Sanitize Method Fixed
There was a reference error in the sanitize method causing it to fail completely. This has been fixed.

#### 1.3.1 - setDefault
A new method called setDefault has been introduced. It allows you to override the default settings for each data type.

### 1.3.0 - Readability, Array Support, Details, Validation
The entire codebase has been drastically reorganized for much better readability. More support for Arrays has been introduced. Potentially breaking changes (most users will be unaffected) from the last have also been introduced to the library (the result of the detail function is now different, however the sanitize and validate functions remain the same). More format validation has been introduced. Error messages are now more detailed.
