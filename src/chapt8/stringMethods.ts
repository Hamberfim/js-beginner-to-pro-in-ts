// built-in methods for strings
// concat()
let s1: string = "My name is ";
let s2: string = "Ronnie Malduron";
let strConcat: string = s1.concat(s2);
console.log(strConcat);

// split() - convert a string into an array
let myStr: string = "Hello Ronnie Malduron";
let str_arr: string[] = myStr.split(" "); // split the string on spaces
console.log(str_arr);

let fruitStr: string = "apples,oranges, pineapples";
let fruit_arr: string[] = fruitStr.split(","); // split the string on commas
console.log(fruit_arr);

// join() - convert an array to a string
let greek: string[] = ["alpha", "beta", "gamma"];
let greekStr: string = greek.join(); // default join results in comma separated string
console.log(greekStr);

let greek2: string[] = ["alpha", "beta", "gamma"];
let greekStr2: string = greek2.join("--"); // replace the default commas with another char to separated string
console.log(greekStr2);

// index and position
// indexOf() <-- first instance of / lastIndexOf() <-- last instance of - they work the same except order of lookup
let poem: string = "Stopping by Woods On a Snowy Evening";
let idxWoods: number = poem.indexOf("Woods"); // starts at index 12-16(+1)
console.log(idxWoods);
let notFound: number = poem.indexOf("frost"); // -1 , not found
console.log(notFound);

// slice()
let snwEve = poem.slice(23, 36); // str-phrase.slice(idx-start-inclusive, idx-end+1-exclusive)
console.log(snwEve);

//usage in a function
function clipWord(strPhrase: string, wrdInput: string) {
  let wrdStart = strPhrase.indexOf(wrdInput);
  let wrdLength = wrdInput.length;
  let wrdEnd = wrdStart + wrdLength + 1; // calculate the length of the word plus 1 for the exclusive end index
  if (strPhrase.indexOf(wrdInput) != -1) {
    return strPhrase.slice(wrdStart, wrdEnd); // slice() is also a string method to create sub-strings | syntax: str-phrase.slice(idx-start, idx-end+1)
  } else {
    return `'${wrdInput}' not found`;
  }
}
let foundWrd = clipWord(poem, "Snowy");
console.log(foundWrd);
let notFoundWrd = clipWord(poem, "Frost");
console.log(notFoundWrd);

// search() - can use regex and string input, while indexOf() can only take a string as it argument parameter
let findCap_E = poem.search(/E/);
console.log(findCap_E);

// charAt() return specific character at an index point
let pos10 = poem.charAt(10);
console.log(pos10); // returns the 'y' of 'by'

// replace() - does what it says
console.log(poem);
let newPhrase: string = poem.replace("Snowy", "Wintry");
console.log(newPhrase);

// others .startsWith()  endsWith() - they return a boolean
let isStopping = poem.startsWith("Stopping");
console.log(isStopping);
