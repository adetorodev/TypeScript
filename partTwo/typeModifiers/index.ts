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