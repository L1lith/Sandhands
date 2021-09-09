import resolveFormat from '../functions/resolveFormat'

function reduceFormat(...args) {
  if (!Array.isArray(args)) throw new Error('Please supply an array of arg(s)')
  if (args.length > 2) throw new Error('Received too many arguments')
  const resolved = resolveFormat(...args)
  let output = resolved.format
  if (
    Object.keys(resolved.options).length > 0 ||
    resolved.ORFormats.length > 0 ||
    resolved.ANDFormats.length > 0 ||
    resolved.NOTFormats.length > 0
  )
    output = { _: output, ...resolved.options }
  if (resolved.ORFormats.length > 0) {
    output._or = resolved.ORFormats
  }
  if (resolved.ANDFormats.length > 0) {
    output._and = resolved.ANDFormats
  }
  if (resolved.NOTFormats.length > 0) {
    output._not = resolved.NOTFormats
  }
  return output
}

export default reduceFormat
