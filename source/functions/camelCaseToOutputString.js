import titleCase from './titleCase'

function camelCaseToOutputString(str) {
  return toTitleCase(str.split(/(?=[A-Z])/g).join(' '))
}

export default camelCaseToOutputString
