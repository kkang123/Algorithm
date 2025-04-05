const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

let res = "";

for (let i = 1; i <= T; i++) {
  const [numStr, str] = input[i].split(" ");
  const num = Number(numStr);

  for (let j = 0; j < str.length; j++) {
    res += str[j].repeat(num);
  }

  res += "\n";
}

console.log(res);
