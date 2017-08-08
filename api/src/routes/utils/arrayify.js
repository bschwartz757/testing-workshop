export default arrayify
// Here's where you'll write arrayify. Look at
// `api/src/routes/utils/arrayify.js` for instructions.

function arrayify(arr) {
  arr = Array.isArray(arr) ? arr : arr === undefined ? [] : [arr]
  return arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? arrayify(b) : b), []
  )
}