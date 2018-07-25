module.exports = {
  email: {_: String, email: true, lowercase: true},
  username: {_: String, regex: /^[a-zA-Z\-0-9]+$/, minLength: 3, lowercase: true, validate: str => !str.startsWith('-') && !str.endsWith('-')},
  password: {_: String, minLength: 8}
}
