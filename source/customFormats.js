const customFormats = {
  email: { _: String, email: true, lowercase: true },
  username: {
    _: String,
    regex: /^[a-zA-Z\-0-9]+$/,
    trimmed: true,
    minLength: 3,
    lowercase: true,
    validate: [
      str => (str.startsWith('-') ? `Username cannot begin with a dash` : true),
      str => (str.endsWith('-') ? `Username cannot end with a dash` : true),
      str => (str.includes('--') ? 'Username cannot include consecutive dashes' : true)
    ]
  },
  password: { _: String, minLength: 8 },
  zipCode: { _: String, regex: /(^\d{5}$)|(^\d{5}-\d{4}$)/ }
}

try {
  const validator = require('is-my-ip-valid')
  const validate = validator()
  customFormats.IP = { _: String, validate: str => validate(str) }
} catch (error) {}

export default customFormats
