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