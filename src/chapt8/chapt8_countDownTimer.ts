// create an end date that you want to count down to
const june302023: string = "June 30, 2023";
// parse the date and subtract the current date  - both will be in seconds
const currentDateSec: number = Date.now();
// console.log(currentDateSec);
const june302023Sec: number = Date.parse(june302023);
// console.log(june302023Sec);
const timeTillDate: number = june302023Sec - currentDateSec;
// console.log(timeTillDate);
const days: number = Math.floor(timeTillDate / (1000 * 60 * 60 * 24));
const hours: number = Math.floor((timeTillDate / (1000 * 60 * 60)) % 24);
const minutes: number = Math.floor(((timeTillDate / 1000) * 60) % 60);
const seconds: number = Math.floor((timeTillDate / 1000) % 60);
console.log(`${days} days ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

// the above as a function
function calculateEndDate(endDate: string) {
  const parseEndDate: number = Date.parse(endDate);
  const currentDateSec: number = Date.now();
  const timeTillEndDate: number = parseEndDate - currentDateSec;
  // calculate days, hours, minutes, seconds
  const days: number = Math.floor(timeTillEndDate / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((timeTillEndDate / (1000 * 60 * 60)) % 24);
  const minutes: number = Math.floor(((timeTillEndDate / 1000) * 60) % 60);
  const seconds: number = Math.floor((timeTillEndDate / 1000) % 60);
  return { days, hours, minutes, seconds };
}
let retire = calculateEndDate("April 3, 2031");
console.log(`${retire.days} days, ${retire.hours} hours, ${retire.minutes} minutes, ${retire.seconds} seconds`);

export {};
