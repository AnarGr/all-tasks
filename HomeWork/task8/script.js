//Task8
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false];

// 1. Show only numbers
const numbers = arr3.filter(item => typeof item === 'number');
console.log("Numbers:", numbers);

// 2. Show only true values
const trueValues = arr3.filter(item => item === true);
console.log("True values:", trueValues);

// 3. Show only false values
const falseValues = arr3.filter(item => item === false);
console.log("False values:", falseValues);

// 4. Show only strings
const strings = arr3.filter(item => typeof item === 'string');
console.log("Strings:", strings);
