function resolveInlineOptions(format, options = {}) {
    let newOptions = {}
    while (typeof format == 'object' && format !== null && format.hasOwnProperty('_')) {
        Object.assign(newOptions, format)
        delete newOptions._
        format = format._
    }
    Object.assign(newOptions, options)
    return { options: newOptions, format }
}

export default resolveInlineOptions
