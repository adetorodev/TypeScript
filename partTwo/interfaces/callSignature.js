// Type: (input: string) => number
var typedFunctionAlias = function (input) { return input.length; }; // Ok
// Type: (input: string) => number
var typedCallSignature = function (input) { return input.length; }; // Ok
var hasCallCount;
function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log("I've been called ".concat(keepsTrackOfCalls.count, " times!"));
}
keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls; // Ok
function doesNotHaveCount() {
    console.log("No idea!");
}
hasCallCount = doesNotHaveCount;
var counts = {};
counts.apple = 0; // Ok
counts.banana = 1; // Ok
counts.cherry = false;
var publishDates = {
    Frankenstein: new Date("1 January 1818")
};
publishDates.Frankenstein; // Type: Date
console.log(publishDates.Frankenstein.toString()); // Ok
publishDates.Beloved; // Type: Date, but runtime value of undefined!
console.log(publishDates.Beloved.toString()); // Ok in the type system, but...
var myNovel;
// Ok
myNovel = {
    author: {
        name: 'Jane Austen'
    },
    setting: {
        place: 'England',
        year: 1812
    }
};
myNovel = {
    author: {
        name: 'Emily Brontë'
    },
    setting: {
        place: 'West Yorkshire'
    }
};
