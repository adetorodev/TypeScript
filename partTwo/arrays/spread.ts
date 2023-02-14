// Type: string[]
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
// Type: number[]
const soldierAges = [90, 19, 45];
// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];

function logWarriors(greeting: string, ...names: string[]) {
    for (const name of names) {
        console.log(`${greeting}, ${name}!`);
    }
}
const warriors = ["Cathay Williams", "Lozen", "Nzinga"];
logWarriors("Hello", ...warriors);
const birthYears = [1844, 1840, 1583];
logWarriors("Born in", ...birthYears);
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.