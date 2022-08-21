// Manipulation of an Array use this array
const theListArr = ["Laurence", "Svekis", true, 35, null, undefined, { test: "one", score: 55 }, ["one", "two"]];
console.log(theListArr);
// Manipulate the array using
//      pop()=remove last, push()=add at end, shift()=remove first, and unshift()= add first:
//       - remove 1st item,
theListArr.shift();
//       - then last item
theListArr.pop();
//       - add 'FIRST' to the start of the array
theListArr.unshift("FIRST");
//       - assign 'hello world' to the 4th item value
theListArr[3] = "hello world";
//       - assign 'MIDDLE' to the 3rd index value
theListArr[2] = "MIDDLE";
//       - add 'LAST' to the last position in the array
theListArr.push("LAST");
//       - remove null,undefined, and { test: 'one', score: 55 } with one array method
theListArr.splice(4, 3);
//       - ouput to console
console.log(theListArr);
