function objectToLiteralString(object) {
	if (typeof object == 'function') {
		return "[Function]"
	} else if (object === null) {
		return "null"
	} else if (Array.isArray(object)) {
		return "["+object.map(objectToLiteralString).join(", ")+"]"
	} else if (typeof object == 'object') {
		return "{"+Object.entries(object).map(([key, value]) => key + ": " + objectToLiteralString(value)).join(", ") + "}"
	} else {
		return object.toString()
	}
}

export default objectToLiteralString
