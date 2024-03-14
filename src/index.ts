import askUser from "./askUser.js";

const songsTitles = ["Flatlands", "Prisoners", "Hunter's moon", "One"];
const songPosition = Number(askUser("Enter song position: "));

if (songPosition >= 1 && songPosition <= songsTitles.length) {
  console.log(songsTitles.at(songPosition - 1));
} else {
  console.log(`Error, there is no song at position ${songPosition}.`);
}
