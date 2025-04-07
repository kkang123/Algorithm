const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const seen = new Set();
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (word[j] !== word[j - 1]) {
      if (seen.has(word[j])) {
        isGroupWord = false;
        break;
      }
      seen.add(word[j]);
    }
  }

  if (isGroupWord) count++;
}

console.log(count);
