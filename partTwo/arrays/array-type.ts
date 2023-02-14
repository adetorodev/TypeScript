let arrayOfNumbers: number[];

arrayOfNumbers = [4, 8, 15, 16, 23, 42];

// Type is a function that returns an array of strings
let createStrings: () => string[];
// Type is an array of functions that each return a string
let stringCreators: (() => string)[];

// Union Type
// Type is either a number or an array of strings
let stringOrArrayOfNumbers: string | number[];
// Type is an array of elements that are each either a number or a string
let arrayOfStringOrNumbers: (string | number)[];

// Type is (string | undefined)[]
const namesMaybe = [
    "Aqualtune",
    "Blenda",
    undefined,
];

// Type: any[]
let values = [];
// Type: string[]
values.push('');
// Type: (number | string)[]
values[0] = 0;

// Multidimentional

let arrayOfArraysOfNumbers: number[][]; // 2D

arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
];