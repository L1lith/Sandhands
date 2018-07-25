module.exports = {
  email: {_: String, email: true, lowercase: true},
  username: {_: String, regex: /^[a-zA-Z\-0-9]+$/, minLength: 3, lowercase: true},
  password: {_: String, minLength: 8}
}
