// Optional

interface Book {
    author?: string; // optional with ? in front
    pages: number;
};
// Ok
const ok: Book = {
    author: "Rita Dove",
    pages: 80,
};
const missing: Book = {
    pages: 80
};

// readonly
interface Page {
    readonly text: string;
}
function read(page: Page) {
    // Ok: reading the text property doesn't attempt to modify it
    console.log(page.text);
    page.text += "!";
    // Error: Cannot assign to 'text'
    // because it is a read-only property.
}

const pageIsh = {
    text: "Hello, world!",
};
// Ok: messengerIsh is an inferred object type with text, not a Page
page.text += "!";
// Ok: read takes in Page, which happens to
// be a more specific version of pageIsh's type
read(messengerIsh);

// Functions and Methods

// Two ways of declaring interface members as functions:
// • Method syntax: declaring that a member of the interface is a function intended to
// be called as a member of the object, like member(): void
// • Property syntax: declaring that a member of the interface is equal to a standalone
// function, like member: () => void

interface HasBothFunctionTypes {
    property: () => string;
    method(): string;
}
//  can recieve optional
interface OptionalReadonlyFunctions {
    optionalProperty?: () => string;
    optionalMethod?(): string;
}
const hasBoth: HasBothFunctionTypes = {
    property: () => "",
    method() {
        return "";
    }
};
hasBoth.property(); // Ok
hasBoth.method(); // Ok

// • Methods cannot be declared as readonly; properties can.
// • Interface merging (covered later in this chapter) treats them differently.
// • Use a method function if you know the underlying function may refer to this,
// most commonly for instances of classes
// • Use a property function otherwise.