var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Type: string[]
var soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
// Type: number[]
var soldierAges = [90, 19, 45];
// Type: (string | number)[]
var conjoined = __spreadArray(__spreadArray([], soldiers, true), soldierAges, true);
function logWarriors(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log("".concat(greeting, ", ").concat(name_1, "!"));
    }
}
var warriors = ["Cathay Williams", "Lozen", "Nzinga"];
logWarriors.apply(void 0, __spreadArray(["Hello"], warriors, false));
var birthYears = [1844, 1840, 1583];
logWarriors.apply(void 0, __spreadArray(["Born in"], birthYears, false));
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
