/* Name         : compyCompare
 * Author       : Anthony Hamlin
 * Created      : 08/29/2022
 * Version      : 1.0
 * OS           : Windows 10
 * Lang         : Typescript (migration from C#)
 * IDE          : Visual Studio Code
 * Copyright    : 2022
 * Description  : a simple program to compare arrays.
 *                A method that copies an array and a method that compares two arrays.
 *                   Input :  static/included
 *                   Output: bool if the arrays are equal*/

// copy an array - method overloading
function copyArray(arr1: number[]): number[];
function copyArray(arr1: string[]): string[];
function copyArray(arr1: any[]): any[] {
  const targetArray: any[] = [...arr1];
  return targetArray;
}

// compare arrays -- method overloading
function compareArrays(arr1: number[], arr2: number[]): boolean;
function compareArrays(arr1: string[], arr2: string[]): boolean;
function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const numb1Arr: number[] = [9, 7, 5, 3, 1];
let numb2Arr = copyArray(numb1Arr);
let compResult1 = compareArrays(numb1Arr, numb2Arr);
console.log(`Are ${numb1Arr} and ${numb2Arr} equal? ${compResult1}`);

const string1Arr: string[] = ["Tom", "Sarah", "Kim"];
let string2Arr = copyArray(string1Arr);
let compResult2 = compareArrays(string1Arr, string2Arr);
console.log(`Are ${string1Arr} and ${string2Arr} equal? ${compResult2}`);

console.log();

// modifiy the array and test
numb2Arr[0] = 0;
compResult1 = compareArrays(numb1Arr, numb2Arr);
console.log(`Are ${numb1Arr} and ${numb2Arr} equal? ${compResult1}`);

// modifiy the array and test
string2Arr[0] = "Bill";
compResult2 = compareArrays(string1Arr, string2Arr);
console.log(`Are ${string1Arr} and ${string2Arr} equal? ${compResult2}`);
