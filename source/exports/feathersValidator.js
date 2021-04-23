import sanitize from './sanitize'

function feathersValidator(...sanitationArgs) {
  if (sanitationArgs.length < 1) throw new Error('Must supply the sanitation arguments')
  return context => {
    if (context.hasOwnProperty('query')) sanitize(context.query, ...sanitationArgs)
    if (context.hasOwnProperty('data')) sanitize(context.data, ...sanitationArgs)
    if (context.hasOwnProperty('result')) smartResultsValidate(context, sanitationArgs) // If there are multiple results perform validation separately
    return context
  }
}

function smartResultsValidate(context, sanitationArgs) {
  const data = context.result
  if (context.method === 'find') {
    data.data.forEach(datum => {
      sanitize(datum, ...sanitationArgs)
    })
  } else {
    sanitize(data, ...sanitationArgs)
  }
}

export default feathersValidator
