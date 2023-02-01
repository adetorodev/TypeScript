console.log("Hello There!")
let singer: string = "Johanna"

let bestSong = Math.random() > 0.5 ? "Chian of Fools" : "Respect"

let firstName = "Johanna"
// firstName.length() // Expression length() is not callable on type number

let mathematician = Math.random() > 0.5 ? undefined : "Mark Godlberg"

let thinker: string | null = null
if (Math.random() > 0.5) {
    thinker = "Susanne Langer"
}

let investor: number | string = "Hedy Lamarr"

// const philosopher = "Hypatia"

let philosopher = "Hypatia"

let specificallyAda: "Ada"
specificallyAda = "Ada"
// specificallyAda = "brown"

// strictNullCheck 
let geneticist = Math.random() > 0.5
    ? "Barbara McClicntock"
    : undefined

if (geneticist) {
    geneticist.toLowerCase()
}
geneticist.toUpperCase() // // Error: Object is possibly 'undefined'.

geneticist && geneticist.toUpperCase(); // Ok: string | undefined
geneticist?.toUpperCase(); // Ok: string | undefined

let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
    biologist; // Type: string
} else {
    biologist; // Type: false | string
}

let MyName = ...

