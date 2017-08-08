// Things to know:
// - The `toEqual` assertion does a "deep" equality check.
//   This means you can verify that two objects are effectively
//   the same because they have the same primative values.
//   For example:
//     `expect({a: 'b'}).toEqual({a: 'b'})`
//   Learn more: https://facebook.github.io/jest/docs/expect.html#toequalvalue
//
// You're going to develop a new utility function called `arrayify`
// using Test Driven Development!
// You'll write this function in `api/src/routes/utils/arrayify.js`
//
// Requirements: accepts a single argument and returns an array
// of that argument. If the given argument is already an array,
// just return the argument. If it's given nothing, return an empty array.
//
// **Remember** to write a simple test to cover a simple use case. Then
// write code to make that test pass. Then refactor your code to clean
// it up if needed. Then continue the cycle until you cover all use cases.
// arrayify() -> []
// arrayify('hi') -> ['hi']
// arrayify([1,2,3]) -> [1,2,3]

import arrayify from '../arrayify'

test('Return an empty array if no args are passed', () => {
  const result = arrayify()
  expect(result).toEqual([])
})

test('Return single argument as array', () => {
  const args = 'hi!'
  const result = arrayify(args)
  expect(result).toEqual([args])
})

test('Return the same array if given an array', () => {
  const args = [1, 2, 3]
  const result = arrayify(args)
  expect(result).toEqual(args)
})

test('Return a flattened array if multidimensional', () => {
  const args = [
    [1, 2, 3],
    [4, 5, 6], 7, 8,
  ]
  const result = arrayify(args)
  expect(result).toEqual([
    1, 2, 3,
    4, 5, 6, 7, 8,
  ])
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=TDD&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////