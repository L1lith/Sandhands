const sanitizeObject = require('./object')
const valid = require('./valid')
const sanitize = require('./sanitize')
const {primitives} = require('./primitive')

const standardMethods = {sanitize, valid, details: sanitizeObject}

class Sanitizer {
  constructor() {
    this.interpretFormat = this.interpretFormat.bind(this)
    this.addFormat = this.addFormat.bind(this)
    this.addFormats = this.addFormats.bind(this)
    this.customFormats = {}
    Object.entries(standardMethods).forEach(([prop, method]) => {
      this[prop] = (...args) => {
        if (args.length >= 2) args[1] = this.interpretFormat(args[1])
        return method(...args)
      }
    })
  }
  addFormat(name, value) {
    if (typeof name != 'string' || name.length < 1) throw new Error('Invalid Custom Format Name')
    if (!(primitives.includes(value) || (typeof value == 'object' && value !== null ))) throw new Error('Invalid Custom Format Value')
    this.customFormats[name] = value
  }
  addFormats(object) {
    if (typeof object != 'object' || object === null) throw new Error("Invalid Formats Object")
    Object.entries(object).forEach(([key, value]) => this.addFormat(key, value))
  }
  interpretFormat(format) {
    if (typeof format == 'string') {
      if (!this.customFormats.hasOwnProperty(format)) throw new Error(`No Custom Format for "${format}"`)
      format = this.customFormats[format]
    } else if (Array.isArray(format)) {
      format = format.map(this.interpretFormat)
    } else if (typeof format == 'object' && format !== null) {
      Object.keys(format).forEach(prop => {
        format[prop] = this.interpretFormat(prop)
      })
    }
    return format
  }
}

const allowedProps = Object.keys(standardMethods).concat(['addFormat', 'addFormats'])

const proxyHandler = {
  get: (obj, prop) => {
  return allowedProps.includes(prop) ? obj[prop] : undefined
}, set: () => false,
  getPrototypeOf: ()=>Sanitizer.prototype,
  isExtensible: ()=>false,
  ownKeys: ()=>[...allowedProps],
  has: (target, prop)=>allowedProps.includes(prop),
  deleteProperty: ()=>false,
  setPrototypeOf: ()=>false
}

function createSanitizer() {
  return new Proxy(new Sanitizer(), proxyHandler)
}

module.exports = createSanitizer
