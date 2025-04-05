const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const reversed = input.map((num) => Number(num.split("").reverse().join("")));

const res = Math.max(...reversed);

console.log(res);
