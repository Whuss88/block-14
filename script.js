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
  let mean = getSum() / numbers.length;
  return mean
}



// invoking functions
console.log(`Length is`,getLength())
console.log(`Sum is:`, getSum())
console.log(`Mean is:`, getMean())