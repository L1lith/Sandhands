function deepEqual(input1, input2) {
    if (input1 === input2)
        // it's just the same input. No need to compare.
        return true
    if (typeof input1 != typeof input2) return false // ensure the same type

    if (isPrimitive(input1) || isPrimitive(input2))
        // compare primitives
        return input1 === input2

    if (Object.getPrototypeOf(input1) !== Object.getPrototypeOf(input2)) return false // Ensure matching Protoypes

    if (typeof input1 == 'function') {
        if (input1.toString() !== input2.toString()) return false // Ensure functions are the same code
    }

    // compare objects with same number of keys
    for (let key in input1) {
        if (!(key in input2)) return false //other object doesn't have this prop
    }
    for (let key in input1) {
        if (!deepEqual(input1[key], input2[key])) return false
    }

    return true
}

//check if value is primitive
function isPrimitive(obj) {
    return obj !== Object(obj)
}

export default deepEqual
