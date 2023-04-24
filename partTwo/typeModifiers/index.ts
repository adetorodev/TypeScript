/***********************
 *  top type
 * ******************* */ 


// any type accept any type of data

let anyValue: any;
anyValue = "Lucile Ball";
anyValue = 234

function greetComedian(name: any) {
    console.log(`Announcing ${name.toUpperCase()}`);
}

greetComedian({ name: "Bea Arthur" })
// Runtime errror: name.toUpperCase is not a function
// name is declared as any, TypeScript does not report a type complaint

// unknown

// The key difference with unknown is that TypeScript is much more restrictive about values of type unknown:
// • TypeScript does not allow directly accessing properties of unknown typed values.
// • unknown is not assignable to types that are not a top type (any or unknown).

// Attempting to access a property of an unknown typed value, as in the following
// snippet, will cause TypeScript to report a type error:

function greetComed(name: unknown){
    console.log(`Announcing ${name.toUpperCase()}`);
    // error: 'name' is of type 'unknown'
}

function greetCommedianSafety(name: unknown){
    if(typeof name === "string"){
        console.log(`Announcing ${name.toUpperCase()}`);
    } else {
        console.log("Well, I'm off.");
    }
}

greetCommedianSafety("Betty White")
greetCommedianSafety({})