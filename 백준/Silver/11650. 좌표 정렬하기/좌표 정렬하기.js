const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

const dot = input.map((line) => {
  const [x, y] = line.split(" ").map(Number);
  return { x, y };
});

dot.sort((a, b) => {
  if (a.x === b.x) {
    return a.y - b.y;
  }
  return a.x - b.x;
});

dot.forEach((dots) => {
  console.log(`${dots.x} ${dots.y}`);
});
