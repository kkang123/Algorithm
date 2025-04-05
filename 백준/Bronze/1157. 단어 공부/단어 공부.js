const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase();

const count = Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  const index = input.charCodeAt(i) - 65;
  count[index]++;
}

const max = Math.max(...count);
const maxIndex = count.indexOf(max);
const duplicate = count.filter((v) => v === max).length > 1;

console.log(duplicate ? "?" : String.fromCharCode(maxIndex + 65));
