
// 1) -------------------------------------------------------
let numbers = [0,1,2,3,4,5,6,7,8,9]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// Q: What is the time complexity of the for loop?
// ANSWER:

//O(1) because the input does not change the run time because the array numbers is a global parameter and is already defined. It is only being performed on this one array.

// 1.2) You are challenged to find the 4th element of the array, and you came up with this solution:

var count = 1
var answer = 0

for (let i = 0; i < numbers.length; i++) {
    if (count === 4) {
        answer = numbers[i]
        return
    } else {
        count += 1
    }
}
// Q: What is the time complexity of of this solution?
// ANSWER:O(n) we are incrementing/iterting through data which will give us a linear run time


// Q: Could you come up with a solution that has a better time complexity? If so, what is that time complexity?
// ANSWER:you could use a slice method or a splice method which will both be O(n) because they are iterating through an array.
// I don't think you can because we have to iterate or dig through an array to find certain value. 
//Because when you change the index value it will create a linear run time because the itteration numbers increase or decrease. 
//The time will vary because depending on the index it will have to run through different amoutns of data.


// 2) -------------------------------------------------------
function printA() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
// Q: What is the time complexity of the function?
// ANSWER: O(n) because we are iterating through data which will casue our run time to vary.


// 3) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i)
  }
}
// Q: What is the time complexity of the function?
// ANSWER: O(n) because we are iterating through data which will casue our run time to vary.


// 4) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j)
    }
  }
}
// Q: What is the time complexity of the function?
// ANSWER:O(n^2) because each time we have a nested loop we increment the exponent of n and we have two nested loops


// 5) -------------------------------------------------------
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(j)
  }
}
// Q: What is the time complexity of the nested for loop?
// ANSWER:O(n^2) because each time we have a nested loop we increment the exponent of n and we have two nested loops


// 6) -------------------------------------------------------
let newNumbersA = numbers.filter((num) => {
  return num < 5
})
// Q: What is the time complexity of the filter higher-order function?
// ANSWER: O(n) we are printing all numbers less than 5 and movin them into a new array so we have to iterate through the numbers array


// 7) -------------------------------------------------------
let newNumbersB = numbers.map((num) => {
  return num * 3
})
// Q: What is the time complexity of the map higher-order function?
// ANSWER: O(n) we are iterating through the numbers in the numbers array and multiplying them by three and adding them to a new array called newNumbers


// 8) -------------------------------------------------------
function removeNum() {
    numbers.splice(3,1)
}
// Q: What is the time complexity of the function?
// ANSWER: O(n) we are defining a function that splices these specific values and taking in various arrays containing different amounts of numbers


// 9) -------------------------------------------------------
function insertNum() {
    numbers.splice(3, 0, 19)
}
// Q: What is the time complexity of the function?
// ANSWER:O(n) we are defining a function that splices these specific values and taking in various arrays containing different amounts of numbers



// 10) -------------------------------------------------------
function pushNum() {
    numbers.push(25)
}
// Q: What is the time complexity of the function?
// ANSWER: O(1) because the push function just adds the number 25 to the beginning of an array so the time will not vary regardless of array length


// 11) -------------------------------------------------------
// Given an array of names....
function printFirstTwoNames(array) {
    console.log(array[0])
    console.log(array[1])
}


// Q: What is the time complexity of the function? Could we write this function differently to accomplish the goal of the function in a faster time complexity?
// ANSWER: O(n)This is a function that iterates through different arrays and prints the values at index 0 and 1 each time.
// No we cannt change the time because we have to iterate through items in an array. Names can vary in length and values can be different.
// If I had an array where the first two names were seven billion characters and the second array had the names Tim, and Tom the time to cycle through 
//those data sets were vary, regardless of how miniscule, we itterate through variating data sets


// Advanced Challenges
// Solve the following challenge. Once complete, determine the time complexity of your solution. Consider if there are ways to solve the challenge with a better time complexity.


// CHALLENGE - SQUARE EVERY NUMBER
//Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81, 1^2 is 1, 1^2 is 1, and 9^2 is 81. Together, we have 81, 1, 1, 81. Once combined we have 811181.
//(let i = 0; i < numbers.length; i++)

// Starting Code:
// function squareEveryDigit(number) {
//   number.toString().split('').map(number => number *number).join 
//   console.log(squareEveryDigit())
// }

function squareEveryDigit(number) {

  return Number( 
    number.toString() // num === "555"
  
    .split('') // ["5", "5", "5"]
  
    .map(number => number * number) 
                  // Now we have [25, 25, 25]
  
    .join('') // "252525"
              );
  }
  
  squareEveryDigit(946)

squareEveryDigit(333)

squareEveryDigit(946) // When running 946, you should see a result of 811636
