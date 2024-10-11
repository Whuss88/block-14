// console.log(`testing`)

const userInput = prompt (`Input numbers seperated by commas.`)

const inputArray = userInput.split(`,`) 

const numbers = [];
//loop to convert input into numbers 
for(let index=0; index < inputArray.length; index = index +1) {
  // const numbersReal = Number()
  numbers.push(Number(inputArray[index]))
  console.log(`numbers:`, numbers)
}
//creating functions
const getLength = () => {
  // console.log(numbers.length);
  return numbers.length;  
}

const getSum =() => {
  // set value of sum
  let sum = 0;
  // loop for finding sum
for (let index = 0;index < numbers.length; index++){
  sum += numbers[index];
}
// return result
   return sum
}

const getMean = () => {
  const mean = getSum() / numbers.length;
  return mean
}

const getMin = () => {
  const min = Math.min(...numbers)
  return min
}

const getMax = () => {
  const max = Math.max(...numbers)
  return max
}

const getRange = () => {
  const range = getMax() - getMin()
  return range
}

const getEvens = () => {
  const evens = numbers.filter(num => num % 2 === 0)
  return evens
}

const getOdds = () => {
  const odds = numbers.filter(num => num % 2 !== 0)
  return odds
}


// invoking functions
console.log(`Length is`,getLength())
console.log(`Sum is:`, getSum())
console.log(`Mean is:`, getMean())
console.log(`Min is:`, getMin())
console.log(`Max is:`, getMax())
console.log(`Range is:`, getRange())
console.log(`Even numbers are:`, getEvens())
console.log(`Odd numbers are:`, getOdds())