import validate from '../validate/any'
import sanitize from '../sanitize/any'
import details from './details'

function sandhandsExpress(...args) {
  return (req, res, next) => {
    if (!req.hasOwnProperty('body')) return res.status(500).send('Expected Body')
    const inputErrors = details(req.body, ...args)
    if (inputErrors !== null) return res.status(400).json(inputErrors)
    next()
  }
}

export default sandhandsExpress
