import ensureValidArguments from '../functions/ensureValidArguments'
import resolveInlineOptions from '../functions/resolveInlineOptions'

function resolveFormat(...args) {
  if (args.length < 1) throw new Error('Must specify a format')

  const inlineOptions = resolveInlineOptions(resolveFormat, ...args)

  // try {
  //   ensureValidArguments(inlineOptions)
  // } catch (error) {
  //   throw error
  // }
  return inlineOptions
}

export default resolveFormat
