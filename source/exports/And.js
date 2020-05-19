function And(...formats) {
  if (formats.length < 2) throw new Error("Must supply at least 2 formats")
  return {_: formats[0], _and: formats.slice(1)}
}

export default And
