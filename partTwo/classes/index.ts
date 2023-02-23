class Greeter {
    greet(name: string) {
        console.log(`${name}, do your stuff!`);
    }
}
new Greeter().greet("Miss Frizzle"); // Ok

class Greeted {
    constructor(message: string) {
        console.log(`As I always say: ${message}!`);
    }
}
new Greeted("take chances, make mistakes, get messy");