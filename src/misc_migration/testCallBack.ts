// each function premise is silly but useful to see how a callback works
function displayLetterGrade(grade: string): void {
  if (grade === "A") {
    console.log(`You got at least 90%. That's an ${grade}!`);
  } else if (grade === "B") {
    console.log(`You got at least 80%. That's a ${grade}!`);
  } else if (grade === "C") {
    console.log(`You got at least 70%. That's a ${grade}!`);
  } else if (grade === "D") {
    console.log(`You got at least 60%. That's a ${grade}!`);
  } else if (grade === "F") {
    console.log(`Oh My, you got less than 60%. That's an ${grade}!`);
  }
}

function calcLetterGrade(score: number, funcCallBack: { (grade: string): void; (arg0: string): void }) {
  let grade = "";
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  funcCallBack(grade);
}

calcLetterGrade(90, displayLetterGrade);
calcLetterGrade(80, displayLetterGrade);
calcLetterGrade(70, displayLetterGrade);
calcLetterGrade(60, displayLetterGrade);
calcLetterGrade(59, displayLetterGrade);
