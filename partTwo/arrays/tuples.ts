let yearAndWarrior: [number, string];
yearAndWarrior = [530, "Tomyris"]; // Ok

yearAndWarrior = [false, "Tomyris"];
// Error: Type 'boolean' is not assignable to type 'number'.
yearAndWarrior = [530];
// Error: Type '[number]' is not assignable to type '[number, string]'.
//Source has 1 element(s) but target requires 2.

// year type: number
// warrior type: string
let [year, warrior] = Math.random() > 0.5
    ? [340, "Archidamia"]
    : [1828, "Rani of Jhansi"];
const tupleThree: [boolean, number, string] = [false, 1583, "Nzinga"];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

const tupleTwoExtra: [boolean, number] = tupleThree;
// Error: Type '[boolean, number, string]' is
// not assignable to type '[boolean, number]'.
// Source has 3 element(s) but target allows only 2.

function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
}
const pairArray = ["Amage", 1];
logPair(...pairArray);
// Error: A spread argument must either have a
// tuple type or be passed to a rest parameter.
const pairTupleIncorrect: [number, string] = [1, "Amage"];
logPair(...pairTupleIncorrect);
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
const pairTupleCorrect: [string, number] = ["Amage", 1];
logPair(...pairTupleCorrect); // Ok


function logTrio(name: string, value: [number, boolean]) {
    console.log(`${name} has ${value[0]} (${value[1]}`);
}
const trios: [string, [number, boolean]][] = [
    ["Amanitore", [1, true]],
    ["Æthelflæd", [2, false]],
    ["Ann E. Dunwoody", [3, false]]
];
trios.forEach(trio => logTrio(...trio)); // Ok
trios.forEach(logTrio);

// Argument of type '(name: string, value: [number, boolean]) => void' is not  
// assignable to parameter of type '(value: [string, [number, boolean]], index: number, 
// array: [string, [number, boolean]][]) => void'.
//   Types of parameters 'name' and 'value' are incompatible.
//     Type '[string, [number, boolean]]' is not assignable to type 'string'