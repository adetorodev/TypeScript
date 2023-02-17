// Optional
;
// Ok
var ok = {
    author: "Rita Dove",
    pages: 80
};
var missing = {
    pages: 80
};
function read(page) {
    // Ok: reading the text property doesn't attempt to modify it
    console.log(page.text);
    page.text += "!";
    // Error: Cannot assign to 'text'
    // because it is a read-only property.
}
var pageIsh = {
    text: "Hello, world!"
};
// Ok: messengerIsh is an inferred object type with text, not a Page
page.text += "!";
// Ok: read takes in Page, which happens to
// be a more specific version of pageIsh's type
read(messengerIsh);
var hasBoth = {
    property: function () { return ""; },
    method: function () {
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
