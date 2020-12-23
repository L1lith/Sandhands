import ensureValidArguments from './ensureValidArguments'
import resolveInlineOptions from './resolveInlineOptions'

function resolveInputs(...args) {
  if (args.length < 1) throw new Error('Must specify a format')

  const inlineOptions = resolveInlineOptions(resolveInputs, ...args)

  try {
    ensureValidArguments(inlineOptions)
  } catch (error) {
    throw error
  }
  return inlineOptions
}

export default resolveInputs
