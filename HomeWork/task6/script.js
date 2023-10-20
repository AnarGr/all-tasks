//Task6
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];

arr1.sort((a, b) => a - b);

console.log(arr1);
arr
sort((a, b) => b - a);

console.log(arr1);

// Find the minimum number
const minNumber = Math.min(...arr1);
console.log("Minimum number:", minNumber);

// Find the maximum number
const maxNumber = Math.max(...arr1);
console.log("Maximum number:", maxNumber);

// Sum all the numbers in arr1
const sum = arr1.reduce((acc, currentValue) => acc + currentValue, 0);
console.log("Sum arr1:", sum);

// Add two numbers (10 and 88) to the end of arr1
arr1.push(10, 88);
console.log (arr1);

// Remove the first two numbers from arr1
arr1.splice(0, 2);

// Add three numbers (0, 9, 11) to the front of arr1 using unshift
arr1.unshift(0, 9, 11);

// Remove four numbers from the front of arr1 using shift
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
