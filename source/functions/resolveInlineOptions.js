function resolveInlineOptions(format, options = {}) {
    let newOptions = {}
    let ORFormats = []
    let ANDFormats = []
    let NOTFormats = []
    while (typeof format == 'object' && format !== null && !Array.isArray(format) && (format.hasOwnProperty('_') || format.hasOwnProperty('_or'))) {
        Object.assign(newOptions, format)
        if (format.hasOwnProperty('_or')) {
          const orF = newOptions._or
          if (!ORFormats.includes(orF)) {
            if (Array.isArray(orF)) {
              ORFormats = Array.from(new Set(ORFormats.concat(orF)))
            } else {
              ORFormats.push(orF)
            }
          }
          delete newOptions._or
        }
        if (format.hasOwnProperty('_and')) {
          const anF = newOptions._and
          if (!ANDFormats.includes(anF)) {
            if (Array.isArray(anF)) {
              ANDFormats = Array.from(new Set(ANDFormats.concat(anF)))
            } else {
              ANDFormats.push(anF)
            }
          }
          delete newOptions._and
        }
        if (format.hasOwnProperty('_not')) {
          const noF = newOptions._not
          if (!NOTFormats.includes(noF)) {
            if (Array.isArray(noF)) {
              NOTFormats = Array.from(new Set(NOTFormats.concat(noF)))
            } else {
              NOTFormats.push(noF)
            }
          }
          delete newOptions._not
        }
        if (format.hasOwnProperty('_')) {
          delete newOptions._
          format = format._
        }
    }
    if (((ORFormats.length > 0) + (ANDFormats.length > 0) + (NOTFormats.length > 0)) > 1) {
      throw new Error("Cannot use more than one boolean logic condition of differing kinds at the same depth")
    }
    Object.assign(newOptions, options)
    return { options: newOptions, format, ORFormats, ANDFormats, NOTFormats }
}

export default resolveInlineOptions
