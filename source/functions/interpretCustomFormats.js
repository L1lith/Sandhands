import customFormats from '../customFormats'

function interpretCustomFormat(format) {
  if (typeof format == 'string') {
    if (!customFormats.hasOwnProperty(format))
      throw new Error(`Custom Format "${format}" Not Found`)
    return customFormats[format]
  } else {
  }
  return format
}

export default interpretCustomFormats
