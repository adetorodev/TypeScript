var arrayOfNumbers;
arrayOfNumbers = [4, 8, 15, 16, 23, 42];
// Type is a function that returns an array of strings
var createStrings;
// Type is an array of functions that each return a string
var stringCreators;
// Union Type
// Type is either a number or an array of strings
var stringOrArrayOfNumbers;
// Type is an array of elements that are each either a number or a string
var arrayOfStringOrNumbers;
// Type is (string | undefined)[]
var namesMaybe = [
    "Aqualtune",
    "Blenda",
    undefined,
];
// Type: any[]
var values = [];
// Type: string[]
values.push('');
// Type: (number | string)[]
values[0] = 0;
// Multidimentional
var arrayOfArraysOfNumbers; // 2D
arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
];
