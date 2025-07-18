const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const high = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

let stack = [];
let output = "";

for (let char of input) {
  if (/[A-Z]/.test(char)) {
    output += char;
  } else if (char === "(") {
    stack.push(char);
  } else if (char === ")") {
    while (stack.length && stack[stack.length - 1] != "(") {
      output += stack.pop();
    }
    stack.pop();
  } else {
    while (stack.length && high[char] <= high[stack[stack.length - 1]]) {
      if (stack[stack.length - 1] === "(") break;
      output += stack.pop();
    }
    stack.push(char);
  }
}

while (stack.length) {
  output += stack.pop();
}

console.log(output);
