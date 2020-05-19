import ANY from './ANY'

function Not(...formats) {
  if (formats.length < 1) throw new Error("Must supply at least 1 format")
  return {_: ANY, _not: formats}
}

export default Not
