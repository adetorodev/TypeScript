var poet = {
    born: 1935,
    name: "Mary Oliver"
};
poet['born']; // type number
poet.name; // type string
var poetLater;
poetLater = {
    born: 1935,
    name: "Sara Teasdale"
};
var hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton"
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
var withFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
var withLastName = hasBoth;
// Ok
var hasBoth = {
    first: "Sarojini",
    last: "Naidu"
};
var hasOnlyOne = {
    first: "Sappho"
};
// Property 'last' is missing in type '{ first: string; }'
// but required in type 'FirstAndLastNames'.
var poem = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
// Type:
// {
//
// name: string;
//
// pages: number;
//
// rhymes ?: undefined;
// }
// |
// {
//
// name: string;
//
// pages ?: undefined;
//
// rhymes: boolean;
// }
poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // booleans | undefined
var poem = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
poem.name; // Ok
poem.pages;
// Property 'pages' does not exist on type 'Poem'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.
// poem.rhymes;
// Property 'rhymes' does not exist on type 'Poem'.
// Property 'rhymes' does not exist on type 'PoemWithPages'.
