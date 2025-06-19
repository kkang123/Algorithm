const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const unique = Array.from(new Set(input));

const sorted = unique.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    return a.localeCompare(b);
  }
});

console.log(sorted.join("\n"));
