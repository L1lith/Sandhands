// CREDIT TO https://stackoverflow.com/a/196991
function titleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

export default titleCase
