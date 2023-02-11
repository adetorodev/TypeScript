// function sing(song: string) {
//     console.log(`Singing: ${song}!`);
// }
// sing("Lecrea")
// function singTwo(first: string, second: string) {
//     console.log(`${first} / ${second}`);
// }
// // singTwo("Ball and Chain");
// // Error: Expected 2 arguments, but got 1.
// // Logs: "I Will Survive / Higher Love"
// singTwo("Background", "I will tell the world"); // Ok
// // Logs: "Background / I will tell the world"
// singTwo("I will find you", "Fit in", "Church Cloth");
// // Error: Expected 2 arguments, but got 3.
// function announceSong(song: string, singer?: string) {
//     console.log(`Song: ${song}`);
//     if (singer) {
//         console.log(`Singer: ${singer}`);
//     }
// }
// announceSong("Church Cloth"); // Ok
// announceSong("Church Cloth", undefined); // Ok
// announceSong("Sunday morning", "Lecrea"); // Ok
// function announceSongBy(song: string, singer: string | undefined) { /* ... */ }
// announceSongBy("Church Cloth");
// // Error: Expected 2 arguments, but got 1.
// announceSongBy("Church Cloth", undefined); // Ok
// announceSongBy("Sunday morning", "Lecrea"); // Ok
// function rateSong(song: string, rating = 0) {
//     console.log(`${song} gets ${rating}/5 stars!`);
// }
// rateSong("Sunday morning"); // Ok
// rateSong("Sunday morning", 5); // Ok
// rateSong("Sunday morning", undefined); // Ok
// rateSong("At Last!", "100");
// // Argument of type 'string' is not assignable to parameter of type 'number'
// // Rest Parameter
// function singAllTheSongs(singer: string, ...songs: string[]) {
//     for (const song of songs) {
//         console.log(`${song}, by ${singer}`);
//     }
// }
// singAllTheSongs("Lecrea"); // Ok
// singAllTheSongs("Sunday morning", "Church Cloth", "Background", "Praying for you"); // Ok
// singAllTheSongs("Lecrea", 2000);
// Argument of type 'number' is not assignable to parameter of type 'string'
// Return Type
// Type: (songs: string[]) => number
function singSongs(songs) {
    for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
        var song = songs_1[_i];
        console.log("".concat(song));
    }
    return songs.length;
}
