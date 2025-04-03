let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let numbers = input[1].split(" ").map(Number);
let index = Number(input[2]);

console.log(numbers.filter((num) => num === index).length);
