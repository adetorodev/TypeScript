const defenders = ["Clarenza", "Dina"];
// Type: string
const defender = defenders[0];

const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
// Type: Date | string
const soldierOrDate = soldiersOrDates[0];

function withElements(elements: string[]) {
    console.log(elements[9001].length); // No type error
}
withElements(["It's", "over"]);
// TypeError: Cannot read properties of undefined (reading 'length')