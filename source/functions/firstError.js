function firstError(errors, deep=false) {
  if (typeof errors == 'object' && errors !== null) {
    if (Array.isArray(errors)) {
      for (let i = 0; i < errors.length; i++) {
        let error = errors[i]
        if (deep === true) error = firstError(error)
        if (error !== null) return error
      }
      return null
    } else {
      const values = Object.values(errors)
      for (let i = 0; i < values.length; i++) {
        let error = values[i]
        if (deep === true) error = firstError(error)
        if (error !== null) return error
      }
      return null
    }
  }
  return errors
}

module.exports = firstError
