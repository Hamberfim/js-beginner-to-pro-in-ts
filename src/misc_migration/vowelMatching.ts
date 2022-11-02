let vowelMatching = (inputStr: string) => {
  let result = inputStr.match(/[aeiou]/gi);
  if (result == null || result == undefined) {
    console.log("Sorry, No Match");
  } else {
    console.log(result);
  }
};
vowelMatching("hello");
vowelMatching("mississippi");
vowelMatching("sky");
