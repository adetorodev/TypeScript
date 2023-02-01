console.log("Hello There!");
var singer = "Johanna";
var bestSong = Math.random() > 0.5 ? "Chian of Fools" : "Respect";
var firstName = "Johanna";
// firstName.length() // Expression length() is not callable on type number
var mathematician = Math.random() > 0.5 ? undefined : "Mark Godlberg";
var thinker = null;
if (Math.random() > 0.5) {
    thinker = "Susanne Langer";
}
var investor = "Hedy Lamarr";
// const philosopher = "Hypatia"
var philosopher = "Hypatia";
var specificallyAda;
specificallyAda = "Ada";
// specificallyAda = "brown"
// strictNullCheck 
var geneticist = Math.random() > 0.5
    ? "Barbara McClicntock"
    : undefined;
if (geneticist) {
    geneticist.toLowerCase();
}
geneticist.toUpperCase(); // // Error: Object is possibly 'undefined'.
geneticist && geneticist.toUpperCase(); // Ok: string | undefined
geneticist === null || geneticist === void 0 ? void 0 : geneticist.toUpperCase(); // Ok: string | undefined
var biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
    biologist; // Type: string
}
else {
    biologist; // Type: false | string
}
var MyName = ;
