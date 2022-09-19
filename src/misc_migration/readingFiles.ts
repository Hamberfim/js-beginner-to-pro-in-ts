import { readFile, readFileSync } from "fs";
const fs = require("fs");

const json = readFileSync("./dist/misc_migration/readjson.json", "utf8"); // read the file
const data = JSON.parse(json); // pared JSON in the file into JS object
console.log(data);

readFile("./dist/misc_migration/text.txt", "utf8", (err: any, data: any) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
