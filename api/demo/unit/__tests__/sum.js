// cases:
    // sum()
    // sum(1) -> 1
    // sum(5) -> 5
    // sum(4,5,6) -> 15

// Let's test drive summing numbers
import sum from '../sum'
test('Passing empty param gives us 0', () => {
  const result = sum()
  expect(result).toBe(0)
})

test('Passing a single number returns that number', () => {
  const result = sum(5)
  expect(result).toBe(5)
})

test('Passing any combination of numbers returns their sum', () => {
  const result = sum(4, 5, 6)
  expect(result).toBe(15)
})
