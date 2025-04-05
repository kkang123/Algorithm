const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const obj = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

let res = 0;

for (let i = 0; i < input.length; i++)
  for (const key in obj) {
    if (key.includes(input[i])) {
      res += obj[key];
      break;
    }
  }

console.log(res);
