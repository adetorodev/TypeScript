var defenders = ["Clarenza", "Dina"];
// Type: string
var defender = defenders[0];
var soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
// Type: Date | string
var soldierOrDate = soldiersOrDates[0];
function withElements(elements) {
    console.log(elements[9001].length); // No type error
}
withElements(["It's", "over"]);
