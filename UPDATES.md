# Updates
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