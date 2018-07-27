module.exports = {
  email: {_: String, email: true, lowercase: true},
  username: {_: String, regex: /^[a-zA-Z\-0-9]+$/, minLength: 3, lowercase: true, validate: [str => str.startsWith('-') ? `Username cannot begin with a dash` : true, str => str.endsWith('-') ? `Username cannot end with a dash` : true, str => str.includes('--') ? "Username cannot include consecutive dashes" : true]},
  password: {_: String, minLength: 8}
}
