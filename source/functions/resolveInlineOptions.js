import onlyUnique from './onlyUnique'
import interpretCustomFormats from './interpretCustomFormats'
import interpretFormatShorthand from './interpretFormatShorthand'
import { Format } from '../exports/Format'

const maxLoopSize = 100

function resolveInlineOptions(resolveInputs, format, options = {}) {
  let newOptions = Object.assign({}, options)
  let ORFormats = []
  let ANDFormats = []
  let NOTFormats = []

  let hasChanged = true
  let loopCount = 0
  while (hasChanged) {
    hasChanged = false
    while (format instanceof Format) {
      format = interpretFormatShorthand(format)
      hasChanged = true
      loopCount++
      if (loopCount >= maxLoopSize) throw new Error('Max loop size exceeded')
    }
    while (typeof format == 'string') {
      format = interpretCustomFormats(format)
      hasChanged = true
      loopCount++
      if (loopCount >= maxLoopSize) throw new Error('Max loop size exceeded')
    }
    while (hasInlineOptions(format)) {
      newOptions = Object.assign({}, format, newOptions)
      delete newOptions._
      format = format._
      hasChanged = true
      loopCount++
      if (loopCount >= maxLoopSize) throw new Error('Max loop size exceeded')
    }
  }
  if (newOptions.hasOwnProperty('_or')) {
    const orF = newOptions._or
    if (!ORFormats.includes(orF)) {
      if (Array.isArray(orF)) {
        ORFormats = ORFormats.concat(orF).filter(onlyUnique)
      } else {
        ORFormats.push(orF)
      }
    }
    delete newOptions._or
  }
  if (newOptions.hasOwnProperty('_and')) {
    const anF = newOptions._and
    if (!ANDFormats.includes(anF)) {
      if (Array.isArray(anF)) {
        ANDFormats = ANDFormats.concat(anF)
          .filter(onlyUnique)
          .map(value => resolveInputs(value))
      } else {
        ANDFormats.push(anF)
      }
    }
    delete newOptions._and
  }
  if (newOptions.hasOwnProperty('_not')) {
    const noF = newOptions._not
    if (!NOTFormats.includes(noF)) {
      if (Array.isArray(noF)) {
        NOTFormats = NOTFormats.concat(noF)
          .filter(onlyUnique)
          .map(value => resolveInputs(value))
      } else {
        NOTFormats.push(noF)
      }
    }
    delete newOptions._not
  }
  if ((ORFormats.length > 0) + (ANDFormats.length > 0) + (NOTFormats.length > 0) > 1) {
    //throw require('util').inspect([ORFormats, ANDFormats, NOTFormats])
    throw new Error(
      `Cannot use more than one boolean logic condition of differing kinds at the same depth, Total ORFormats: ${ORFormats.length}, Total ANDFormats: ${ANDFormats.length}, total NOTFormats: ${NOTFormats.length}`
    )
  }
  return { options: newOptions, format, ORFormats, ANDFormats, NOTFormats }
}

function hasInlineOptions(format) {
  return (
    typeof format == 'object' &&
    format !== null &&
    !Array.isArray(format) &&
    format.hasOwnProperty('_')
  )
}

export default resolveInlineOptions
