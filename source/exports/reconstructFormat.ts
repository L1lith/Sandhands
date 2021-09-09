function reconstructFormat(resolvedFormat) {
  const { format, options, ANDFormats, NOTFormats, ORFormats } = resolvedFormat
  const hasOptions = Object.keys(options).length > 0
  const hasOR = Object.keys(ORFormats).length > 0
  const hasAND = Object.keys(ANDFormats).length > 0
  const hasNOT = Object.keys(NOTFormats).length > 0
  if (hasOptions || hasOR || hasAND || hasNOT) {
    let output = { _: format }

    if (hasOptions) {
      Object.assign(output, resolvedFormat.options)
    }
    if (hasOR) {
      output._or = ORFormat
    }
    if (hasAND) {
      output._and = ANDFormat
    }
    if (hasNOT) {
      output.NOTFormats = NOTFormat
    }
    return output
  } else {
    return resolvedFormat.format
  }
}

export default reconstructFormat
