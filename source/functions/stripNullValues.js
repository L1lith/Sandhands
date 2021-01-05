function stripNullValues(object) {
  if (typeof object == 'object' && object !== null) {
    if (Array.isArray(object)) {
      object.forEach((value, index) => {
        if (value === null) {
          delete object[index]
        } else {
          stripNullValues(value)
        }
      })
    } else {
      Object.entries(object).forEach(([key, value]) => {
        if (value === null) {
          delete object[key]
        } else {
          stripNullValues(object[key])
        }
      })
    }
  }
}

export default stripNullValues
