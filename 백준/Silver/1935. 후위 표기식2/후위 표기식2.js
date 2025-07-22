const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
const back = input.shift();
const num = input.map(Number);

const mapping = {};
for (let i = 0; i < T; i++) {
  mapping[String.fromCharCode(65 + i)] = num[i];
}

const stack = [];

for (let el of back) {
  if (/[A-Z]/.test(el)) {
    stack.push(mapping[el]);
  } else {
    const b = stack.pop();
    const a = stack.pop();
    let res = 0;

    if (el === "+") res = a + b;
    else if (el === "-") res = a - b;
    else if (el === "*") res = a * b;
    else if (el === "/") res = a / b;

    stack.push(res);
  }
}

console.log(stack[0].toFixed(2));
