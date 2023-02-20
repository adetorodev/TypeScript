// Ok
var myNovella = {
    pages: 195,
    title: "Ethan Frome"
};
var missingPages = {
    // ~~~~~~~~~~~~
    // Error: Property 'pages' is missing in type
    // '{ title: string; }' but required in type 'Novella'.
    title: "The Awakening"
};
var extraProperty = {
    // Error: Type '{ genre: string; name: string; strategy: string; }'
    // is not assignable to type 'Novella'.
    // Object literal may only specify known properties,
    // and 'genre' does not exist in type 'Novella'.
    pages: 300,
    strategy: "baseline",
    style: "Naturalism"
};
function useGivesBoth(instance) {
    instance.giveEither(); // Type: number | string
    instance.giveNumber(); // Type: number
    instance.giveString(); // Type: string
}
