import sanitize from './sanitize'

function feathersValidator(...sanitationArgs) {
  if (sanitationArgs.length < 1) throw new Error('Must supply the sanitation arguments')
  return context => {
    if (context.hasOwnProperty('query')) sanitize(context.query, ...sanitationArgs)
    if (context.hasOwnProperty('data')) sanitize(context.data, ...sanitationArgs)
    if (context.hasOwnProperty('result')) smartArrayValidate(context.result, sanitationArgs) // If there are multiple results perform validation separately
    return context
  }
}

function smartArrayValidate(data, sanitationArgs) {
  if (Array.isArray(data)) {
    data.forEach(datum => {
      sanitize(datum, ...sanitationArgs)
    })
  } else {
    sanitize(data, ...sanitationArgs)
  }
}

export default feathersValidator
