function isEmptyObject(object) {
    if (
        typeof object != 'object' ||
        object === null ||
        Object.getOwnPropertyNames(object).length > 0
    )
        return false
    return true
}

export default isEmptyObject
