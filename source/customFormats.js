module.exports = {
  email: {_: String, email: true},
  username: {_: String, regex: /^[a-zA-Z\-0-9]+$/, minLength: 3},
  password: {_: String, minLength: 8}
}
