const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
const stack = [];

for (let i = 0; i < T; i++) {
  if (input[i].includes("push")) {
    const pushNum = input[i].split(" ");
    stack.push(Number(pushNum[1]));
  } else if (input[i] === "top") {
    console.log(stack.length > 0 ? stack[stack.length - 1] : -1);
  } else if (input[i] === "size") {
    console.log(stack.length);
  } else if (input[i] === "empty") {
    console.log(stack.length === 0 ? 1 : 0);
  } else if (input[i] === "pop") {
    console.log(stack.length > 0 ? stack[stack.length - 1] : -1);
    stack.pop(stack.length - 1);
  }
}
