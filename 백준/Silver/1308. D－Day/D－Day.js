const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [y1, m1, d1] = input[0].split(" ").map(Number);
const [y2, m2, d2] = input[1].split(" ").map(Number);

const today = new Date(y1, m1 - 1, d1);
const dDay = new Date(y2, m2 - 1, d2);
const deadline = new Date(y1 + 1000, m1 - 1, d1);

if (dDay >= deadline) {
  console.log("gg");
} else {
  const diff = Math.floor((dDay - today) / (1000 * 60 * 60 * 24));
  console.log("D-" + diff);
}
