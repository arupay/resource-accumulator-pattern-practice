/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let newString = []
  for (let person of people) {
    newString.push(person.name)
  }
  return newString
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
  for (const person of people){
    if (person.name.toLowerCase() === name.toLowerCase()){
      return person
      }
  }
  return null
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let youngArray = []
  for (const person of people){
    if (person.age < 25){
      youngArray.push(person)
    }
  }
  return youngArray
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
  let newArr = []
  for (const person of people){
    if (person.email.includes("gmail.com")){
      newArr.push(person)
    }
  }
  return newArr
}
// people2 = [
//   {
//     age: 24,
//     name: "Hendrix Winters",
//     email: "hendrixwinters@gmail.com",
//     address: "637 Tompkins Place, Elfrida, Arizona, 43832",
//   }]
// getPeopleWithGmail(people2)

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
