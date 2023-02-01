const poet = {
    born: 1935,
    name: "Mary Oliver",
}

poet['born']; // type number
poet.name // type string

// let poetLater: {
//     born: number;
//     name: string;
// };

// poetLater = {
//     born: 1935,
//     name: "Mary Oliver",
// };

// poetLater = "Sappho"

type Poet = {
    born: number;
    name: string;
}

let poetLater: Poet

poetLater = {
    born: 1935,
    name: "Sara Teasdale",
};


type WithFirstName = {
    firstName: string;
};
type WithLastName = {
    lastName: string;
};
const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};

// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth;

type FirstAndLastNames = {
    first: string;
    last: string;
};
// Ok
const hasBoth: FirstAndLastNames = {
    first: "Sarojini",
    last: "Naidu",
};
const hasOnlyOne: FirstAndLastNames = {
    first: "Sappho"
};
// Property 'last' is missing in type '{ first: string; }'
// but required in type 'FirstAndLastNames'.


const poem = Math.random() > 0.5
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


type PoemWithPages = {
    name: string;
    pages: number;
    };
    type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
    };
    type Poem = PoemWithPages | PoemWithRhymes;
    const poem: Poem = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
    poem.name; // Ok
    poem.pages;
    
    // Property 'pages' does not exist on type 'Poem'.
    
    // Property 'pages' does not exist on type 'PoemWithRhymes'.
    // poem.rhymes;
   
    // Property 'rhymes' does not exist on type 'Poem'.
    
    // Property 'rhymes' does not exist on type 'PoemWithPages'.