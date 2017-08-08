// let's sum some numbers with TDD
const sum = function(...nums) {
  // using 0 as accumulator allows first test to pass
  // (gives us a default value of zero)
  return nums.reduce((acc, i) => acc + i, 0)
}

export default sum
