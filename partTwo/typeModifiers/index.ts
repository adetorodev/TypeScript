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

function greetComed(name: unknown) {
    console.log(`Announcing ${name.toUpperCase()}`);
    // error: 'name' is of type 'unknown'
}

function greetCommedianSafety(name: unknown) {
    if (typeof name === "string") {
        console.log(`Announcing ${name.toUpperCase()}`);
    } else {
        console.log("Well, I'm off.");
    }
}

greetCommedianSafety("Betty White")
greetCommedianSafety({})

// type predicates

// function isNumberOrString(value: unknown) {
//     return ['number', 'string'].includes(typeof value)
// }

// function logValueIfExists(value: number | string | null | undefined) {
//     if (isNumberOrString(value)) {
//         // type of value: string | number | null | undefined
//         value.toString();
//         // error: 'value' is possibly 'null' or 'undefined'
//     } else {
//         console.log("Value does not exit:", value);
//     }
// }

function isNumberOrString(value: unknown): value is number | string {
    return ['number', 'string'].includes(typeof value);
}
function logValueIfExists(value: number | string | null | undefined) {
    if (isNumberOrString(value)) {
        // Type of value: number | string
        value.toString(); // Ok
    } else {
        // Type of value: null | undefined
        console.log("value does not exist:", value);
    }
}


interface Comedian {
    funny: boolean;
}
interface StandupComedian extends Comedian {
    routine: string;
}
function isStandupComedian(value: Comedian): value is StandupComedian {
    return 'routine' in value;
}
function workWithComedian(value: Comedian) {
    if (isStandupComedian(value)) {
        // Type of value: StandupComedian
        console.log(value.routine); // Ok
    }
    // Type of value: Comedian
    console.log(value.routine);
    //
// Error: Property 'routine' does not exist on type 'Comedian'.
}