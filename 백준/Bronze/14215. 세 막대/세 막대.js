const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let [x, y, z] = [a, b, c];

if (x + y <= z) {
  z = x + y - 1; // 삼각형 조건을 위한 -1
}

console.log(x + y + z);
