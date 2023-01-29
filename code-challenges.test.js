// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { number } = require("yargs")

// const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe ('capitalizeMe', () => {
  it ('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
    expect (capitalizeMe(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
// capitalizeMe
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// ● capitalizeMe › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//   ReferenceError: capitalizeMe is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE
// create fxn called capitalizeMe
// input: array of objects
// output: array with a sentence about each person with their name capitalized
// iterate through array to access each object
// use dot notation to access the key 'name' in each object
// iterate through string and .toUpperCase index 0 and the letter after any space

const capitalizeMe = (arr) => {
  return arr.map((value) => {
    let splitArr = value.name.split(' ')
    let emptyArr = []
    splitArr.map((value, i) => {
      return emptyArr.push(value[0].toUpperCase() + value.substr(1) + ' ')
    })
    return `${emptyArr.join('')}is ${value.occupation}.`
  });
}
// PASS  ./code-challenges.test.js
// capitalizeMe
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe ('remainders', () => {
  it ('takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3', () => {
    expect (remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect (remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
// remainders
//   ✕ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3

// ● remainders › takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3

//   ReferenceError: remainders is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE
// create function remainders
// input: array of mixed data types
// output: array of remainders when divided by 3
// use filter to get array of only numbers
// iterate through new array of only numbers for remainder when divided by three

const remainders = (arr) => {
  let numArr =  arr.filter(value => typeof value === 'number')
  return numArr.map((value) => {
    return value % 3
  })
}

// PASS  ./code-challenges.test.js
// remainders
//   ✓ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe ('sumCubed', () => {
  it ('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
    expect (sumCubed(cubeAndSum1)).toEqual(99)
    expect (sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// sumCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed

// ● sumCubed › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

// PSUEDOCODE
// create function sumCubed
// input: array of numbers
// output: sum of each number cubed
// iterate through array and cube each value
// add all the new numbers together

const sumCubed = (arr) => {
  cubedArr = arr.map(value => value*value*value)
  return cubedArr.reduce((a,b) => a + b, 0)
}

// PASS  ./code-challenges.test.js
// sumCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
