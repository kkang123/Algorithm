const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let line of input) {
  if (line === ".") break;

  const stack = [];

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") {
        console.log("no");
        break;
      }
    } else if (char === "]") {
      if (stack.pop() !== "[") {
        console.log("no");
        break;
      }
    }

    if (i === line.length - 1) {
      if (stack.length === 0) {
        console.log("yes");
      } else {
        console.log("no");
      }
    }
  }
}
