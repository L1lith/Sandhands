import ANY from './ANY'
import validate from '../validate/any'

function Not(...formats) {
  if (formats.length < 1) throw new Error('Must supply at least 1 format')
  formats.forEach(format => validate(format))
  return { _: ANY, _not: formats }
}

export default Not
