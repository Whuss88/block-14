// Prompt user for input
let userInput = prompt("Enter numbers separated by commas:");

// Turn user input into an array
let numArray = userInput.split(",").map(Number);

// Define the functions
const getLength = (arr) => arr.length;

const getSum = (arr) => arr.reduce((acc, num) => acc + num, 0);

const getMean = (arr) => getSum(arr) / getLength(arr);

const getMin = (arr) => Math.min(...arr);

const getMax = (arr) => Math.max(...arr);

const getRange = (arr) => getMax(arr) - getMin(arr);

const getEvens = (arr) => arr.filter(num => num % 2 === 0);

const getOdds = (arr) => arr.filter(num => num % 2 !== 0);

// Example usage
alert(`You entered ${getLength(numArray)} numbers.`);
alert(`The sum of the numbers is ${getSum(numArray)}.`);
alert(`The mean of the numbers is ${getMean(numArray).toFixed(2)}.`);
alert(`The minimum number is ${getMin(numArray)}.`);
alert(`The maximum number is ${getMax(numArray)}.`);
alert(`The range of the numbers is ${getRange(numArray)}.`);
alert(`The even numbers are: ${getEvens(numArray).join(", ")}.`);
alert(`The odd numbers are: ${getOdds(numArray).join(", ")}.`);
