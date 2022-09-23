// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

const myFunction = (n) => {
    return ~~n === n;
}

module.exports = {
    myFunction,
}