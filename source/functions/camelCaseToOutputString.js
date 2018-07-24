const titleCase = require('./titleCase')

function camelCaseToOutputString(str) {
	return toTitleCase(str.split(/(?=[A-Z])/g).join(' '))
}

module.exports = camelCaseToOutputString
