const songs = ["Juice", "Shake It Off", "What's Up"];
function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(getSongAt(i));
  }
}
function getSongAt(index: number) {
  return `${songs[index]}`;
}
runOnSongs(getSongAt); // Ok
function logSong(song: string) {
  return `${song}`;
}
runOnSongs(logSong); 
// Argument of type '(song: string) => string' is not assignable to parameter of type '(index: number) => string'.

// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;
// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;

let singersong: (song: string) => string;
singersong = function (song) {
// Type of song: string
return `Singing: ${song.toUpperCase()}!`; // Ok
};