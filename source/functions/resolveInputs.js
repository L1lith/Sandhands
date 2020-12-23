import resolveInlineOptions from './resolveInlineOptions'
import interpretCustomFormats from './interpretCustomFormats'

function resolveInputs(...args) {
  if (args.length < 1) throw new Error('Must specify a format')

  const inlineOptions = resolveInlineOptions(resolveInputs, ...args)
  inlineOptions.format = interpretCustomFormats(inlineOptions.format)
  return inlineOptions
}

export default resolveInputs
