// creating dates  3 ways
let now1 = new Date();
console.log(now1, "\n");

let timeSince1970 = Date.now(); // number of seconds since Jan. 1, 1970
console.log(timeSince1970);
let now2 = new Date(timeSince1970); // convert to date
console.log(now2, "\n");

let now3 = new Date(2022, 0, 10, 12, 10, 15, 100);
console.log(now3);

// get elements of the date/time
let today = new Date();
console.log("Day of Week number", today.getDay());
console.log("Day of month", today.getDate());
console.log("Month (zero idx)", today.getMonth() + 1);
console.log("Year", today.getFullYear());
console.log("Seconds", today.getSeconds());
console.log("Milliseconds", today.getMilliseconds());
console.log("Time in seconds", today.getTime()); // number of seconds since Jan. 1, 1970

// set elements of the date/time
let someDate: Date = new Date();
console.log("Set Month to Jan.(zero idx)", new Date(someDate.setMonth(0)));
console.log("Set Day to 10th", new Date(someDate.setDate(10)));
console.log("Set Hour to 22", new Date(someDate.setHours(22))); // 24 hour clock

// parse dates
let parsedTimeInSec = Date.parse("April 3, 1966"); // number of seconds since Jan. 1, 1970. The result is a negative num in this case
console.log(parsedTimeInSec, "seconds as a Date =", new Date(parsedTimeInSec));
parsedTimeInSec = Date.parse("03/13/1967");
console.log(parsedTimeInSec, "seconds as a Date =", new Date(parsedTimeInSec));

// convert toDateString()
let d = new Date();
d.setTime(-118260000000);
console.log(d.toDateString()); // specific format
console.log(d.toLocaleDateString()); // specific format

export {};
