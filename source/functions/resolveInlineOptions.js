import onlyUnique from './onlyUnique'

function resolveInlineOptions(resolveInputs, format, options = {}) {
  let newOptions = Object.assign({}, options)
  let ORFormats = []
  let ANDFormats = []
  let NOTFormats = []
  let hasInlineOptions =
    typeof format == 'object' &&
    format !== null &&
    !Array.isArray(format) &&
    format.hasOwnProperty('_')
  while (hasInlineOptions) {
    newOptions = Object.assign({}, format, newOptions)
    format = newOptions._
    delete newOptions._
    hasInlineOptions =
      typeof format == 'object' &&
      format !== null &&
      !Array.isArray(format) &&
      format.hasOwnProperty('_')
  }
  if (newOptions.hasOwnProperty('_or')) {
    const orF = newOptions._or
    if (!ORFormats.includes(orF)) {
      if (Array.isArray(orF)) {
        ORFormats = ORFormats.concat(orF)
          .filter(onlyUnique)
          .map(value => resolveInputs(value))
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
    throw require('util').inspect([ORFormats, ANDFormats, NOTFormats])
    throw new Error(
      `Cannot use more than one boolean logic condition of differing kinds at the same depth, Total ORFormats: ${ORFormats.length}, Total ANDFormats: ${ANDFormats.length}, total NOTFormats: ${NOTFormats.length}`
    )
  }
  return { options: newOptions, format, ORFormats, ANDFormats, NOTFormats }
}

export default resolveInlineOptions
