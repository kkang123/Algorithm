const [x, y, w, h] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.min(x, w - x, y, h - y));
