import askUser from "./askUser.js";

const songsTitles = ["Flatlands", "Prisoners", "Hunter's moon", "One"];
const userSong = Number(askUser("Enter song position: "));

console.log(userSong);

if (userSong >= 1 && userSong <= songsTitles.length) {
  console.log(songsTitles.at(userSong - 1));
} else {
  console.log("Error");
}
