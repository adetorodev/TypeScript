interface Writing {
    title: string;
}
interface Novella extends Writing {
    pages: number;
}
// Ok
let myNovella: Novella = {
    pages: 195,
    title: "Ethan Frome",
};
let missingPages: Novella = {
    // ~~~~~~~~~~~~
    // Error: Property 'pages' is missing in type
    // '{ title: string; }' but required in type 'Novella'.
    title: "The Awakening",
}
let extraProperty: Novella = {
    // Error: Type '{ genre: string; name: string; strategy: string; }'
    // is not assignable to type 'Novella'.
    // Object literal may only specify known properties,
    // and 'genre' does not exist in type 'Novella'.
    pages: 300,
    strategy: "baseline",
    style: "Naturalism"
};

interface WithNullableName {
    name: string | null;
}
interface WithNonNullableName extends WithNullableName {
    name: string;
}
interface WithNumericName extends WithNullableName {
    name: number | string;
}
// Error: Interface 'WithNumericName' incorrectly
// extends interface 'WithNullableName'.
// Types of property 'name' are incompatible.
// Type 'string | number' is not assignable to type 'string | null'.
// Type 'number' is not assignable to type 'string'.

interface GivesNumber {
    giveNumber(): number;
}
interface GivesString {
    giveString(): string;
}
interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string;
}
function useGivesBoth(instance: GivesBothAndEither) {
    instance.giveEither(); // Type: number | string
    instance.giveNumber(); // Type: number
    instance.giveString(); // Type: string
}