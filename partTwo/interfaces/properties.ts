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
    //
    ~~~~
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