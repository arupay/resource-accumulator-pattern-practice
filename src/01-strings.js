/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  let newWord = words.join("")
  return newWord
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
  let newArr = []
  for (const word of words){
    let newWord = `${word}${word}`
    newArr.push(newWord)
  }
  return newArr
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let newArr = []
  for (const word of words){
    if (word.length <= 4){
      newArr.push(word)
    }
  }
  return newArr
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  for (const word of words){
    if (word.includes(character)){
      return word
    }
  }
  return null
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
  for (let word of words){
    if (word !== word.toUpperCase()){
      return false
    }
  }
  return true
}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {
  let first = words[0]
  for (let word of words){
    if (word.length > first.length){
    first = word
    }
  }
  return first
}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
