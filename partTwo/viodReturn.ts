function logSong(song: string | undefined): void {
    if (!song) {
        return; // Ok
    }
    console.log(`${song}`);
    return true;
    // Error: Type 'boolean' is not assignable to type 'void'.
}

let songLogger: (song: string) => void;
songLogger = (song) => {
    console.log(`${songs}`);
};
songLogger("Heart of Glass"); // Ok

function returnsVoid() {
    return;
}
let lazyValue: string | undefined;
lazyValue = returnsVoid();
    // Error: Type 'void' is not assignable to type 'string | undefined'.