/*
 * Name         : metalWinner
 * Author       : Anthony Hamlin
 * Created      : 09/05/2022
 * Version      : 1.0
 * OS           : Windows 10
 * Lang         : Typescript (migration from C#)
 * IDE          : Visual Studio Code
 * Copyright    : 2022
 * Description  : This program displays details about medal winners or points to the console.
 *                 The data/program in not represenitive of any reality, its just an exercise.
 */
function MedalWinner(fName: string, lName: string, rank: string | number): string {
  let strResult: string | number = "...";
  fName = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
  lName = lName.toUpperCase();
  strResult = fName + " " + lName;

  if (!isNaN(Number(rank))) {
    rank = Number(rank).toFixed(2);
    strResult = strResult + " Rank: " + rank.toString();
  } else if (typeof rank === "string") {
    rank = rank.toUpperCase();
    strResult = strResult + " Rank: " + rank;
  }
  return strResult;
}
// dealing with number string type mixing
let winner1 = MedalWinner("MEGAN", "rapinoE", 1);
console.log(winner1);
console.log("Expected: Megan RAPINOE Rank: 1");

let winner2 = MedalWinner("USA", "Women's Soccer", "Silver");
console.log(winner2);
console.log("Expected: Usa WOMEN'S SOCCER Rank: SILVER");

let winner3 = MedalWinner("USA", "Women's Soccer", "1.588");
console.log(winner3);
console.log("Expected: Usa WOMEN'S SOCCER Rank: 1.58");

let winner4 = MedalWinner("USA", "Men's Soccer", "Gold");
console.log(winner4);
console.log("Expected: Usa MEN'S SOCCER Rank: GOLD");

let winner5 = MedalWinner("USA", "Women's Shot put", "1.755");
console.log(winner5);
console.log("Expected: Usa WOMEN'S SHOT PUT Rank: 1.75");
