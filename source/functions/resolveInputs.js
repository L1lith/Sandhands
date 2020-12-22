import resolveInlineOptions from './resolveInlineOptions'
import interpretCustomFormats from './interpretCustomFormats'

function resolveInputs(format, options) {
  format = interpretCustomFormats(format)
  const inlineOptions = resolveInlineOptions(resolveInputs, format, options)
  return inlineOptions
}

export default resolveInputs
