function firstError(errors) {
  if (typeof errors == 'object' && errors !== null) {
    if (Array.isArray(errors)) {
      for (let i = 0; i < errors.length; i++) {
        const error = errors[i]
        if (error !== null) return error
      }
      return null
    } else {
      const values = Object.values(errors)
      for (let i = 0; i < values.length; i++) {
        const error = values[i]
        if (error !== null) return error
      }
      return null
    }
  }
  return errors
}

module.exports = firstError
