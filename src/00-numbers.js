/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
  sum = 0
  for (let value of values){
    sum += value
  }
  return sum
}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
  newArr = []
  for (let value of values){
    newArr.push(value * 2)
  }
  return newArr
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  newArr = []
  for (let value of values){
    if (value % 2 === 0){
      newArr.push(value)
    }
  }
  return newArr
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  for (let value of values){
    if(value === val){
      return value
    }
  }
  return null
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  for (let value of values){
    if (value < 1){
      return true
    } else {
      return false
    }
  }
  return false
}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
  let bigNum = values[0]
  if (values.length === 0){
    return null
  } for (let value of values){
    if (value > bigNum){
      bigNum = value
    }
  }
  return bigNum
}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
