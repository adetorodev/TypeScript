function sing(song) {
    console.log("Singing: ".concat(song, "!"));
}
sing("Lecrea");
function singTwo(first, second) {
    console.log("".concat(first, " / ").concat(second));
}
// singTwo("Ball and Chain");
// Error: Expected 2 arguments, but got 1.
// Logs: "I Will Survive / Higher Love"
singTwo("Background", "I will tell the world"); // Ok
// Logs: "Background / I will tell the world"
singTwo("I will find you", "Fit in", "Church Cloth");
// Error: Expected 2 arguments, but got 3.
function announceSong(song, singer) {
    console.log("Song: ".concat(song));
    if (singer) {
        console.log("Singer: ".concat(singer));
    }
}
announceSong("Church Cloth"); // Ok
announceSong("Church Cloth", undefined); // Ok
announceSong("Sunday morning", "High"); // Ok
