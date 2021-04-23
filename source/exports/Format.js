import resolveInputs from '../functions/resolveInputs'
import validate from '../validate/any'
import ANY from './ANY'
import details from './details'
import sanitize from './sanitize'
import valid from './valid'
import onlyUnique from '../functions/onlyUnique'
import feathersValidator from './feathersValidator'

class Format {
  constructor(...args) {
    const inlineOptions = resolveInputs(...args)
    validate(inlineOptions)

    this.format = { ...(inlineOptions.options || {}), _: inlineOptions.format || ANY }
  }
  setOptions(options) {
    if (typeof options != 'object' || options === null) throw new Error('Options must be an object')
    if (options.hasOwnProperty('_'))
      console.warn(
        'Warning: Setting the primary format (the "_" property) through the setOptions, this could cause unintended behavior.'
      )
    Object.assign(this.format, options)
  }
  setOption(optionName, value) {
    if (typeof optionName != 'string') throw new Error('option name must be a string')
    this.format[optionName] = value
  }
  getOption(optionName) {
    if (typeof optionName != 'string') throw new Error('option name must be a string')
    return this.format[optionName]
  }
  details(input) {
    return details(input, this.format)
  }
  valid(input) {
    return valid(input, this.format)
  }
  sanitize(input) {
    return sanitize(input, this.format)
  }
  Or(...formats) {
    throw new Error('This feature has been temporarily disabled.')
    if (formats.length < 1) throw new Error('Must supply at least 1 format')
    formats.forEach(format => validate(format))
    this.setOption('_or', (this.getOption('_or') || []).concat(formats).filter(onlyUnique))
  }
  And(...formats) {
    throw new Error('This feature has been temporarily disabled.')
    if (formats.length < 1) throw new Error('Must supply at least 1 format')

    formats.forEach(format => validate(format))
    this.setOption('_and', (this.getOption('_and') || []).concat(formats).filter(onlyUnique))
  }
  Not(...formats) {
    throw new Error('This feature has been temporarily disabled.')
    if (formats.length < 1) throw new Error('Must supply at least 1 format')
    formats.forEach(format => validate(format))
    this.setOption('_not', (this.getOption('not') || []).concat(formats).filter(onlyUnique))
  }
  get feathersValidator() {
    return feathersValidator(this.format)
  }
  // nullable(isNullable = true) {
  //   if (typeof isNullable !== 'boolean') throw new Error('Nullable expected boolean')
  //   this.setOption('nullable', isNullable)
  // }
}

const nonSelfReturningFunctions = ['details', 'valid', 'sanitize']

const formatProxy = {
  get: (target, prop) => {
    if (target === createFormat) return createFormat[prop]
    if (!(target instanceof Format)) {
      throw new Error('Expected Format Instance')
    }
    if (prop === 'constructor') throw new Error('Cannot retrieve the contructor')
    //if (prop === '_') throw new Error('You must assign the format in the constructor')
    if (prop === 'format') return target.format
    if (typeof target[prop] == 'function') {
      const func = target[prop]
      if (nonSelfReturningFunctions.includes(prop)) return func.bind(target)
      return (...args) => {
        func.apply(target, args)
        return new Proxy(target, formatProxy)
      }
    }
    //if (prop === "And") throw require('util').inspect([target, target[prop], prop])

    return (...args) => {
      const newValue = args.length > 0 ? args[0] : true
      target.format[prop] = newValue
      return new Proxy(target, formatProxy)
    }
  },
  construct(target, args) {
    return createFormat(...args)
  }
}

function createFormat(...args) {
  if (args.length < 1) throw new Error('Must supply a format.')
  return new Proxy(new Format(...args), formatProxy)
}
const format = new Proxy(createFormat, formatProxy)
export { format, Format }
