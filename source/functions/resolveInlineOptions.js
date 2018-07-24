function resolveInlineOptions(format, options) {
  let newOptions = {}
  while (format.hasOwnProperty('_')) {
    newOptions = {...newOptions, ...format}
    delete newOptions._
    format = format._
  }
  options = {...newOptions, options}
}

module.exports = resolveInlineOptions
