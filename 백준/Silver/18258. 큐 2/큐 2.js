const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
let queue = [];
let head = 0;
let output = [];

for (let i = 1; i <= N; i++) {
  let command = input[i].split(" ");
  switch (command[0]) {
    case "push":
      queue.push(Number(command[1]));
      break;
    case "pop":
      output.push(queue.length > head ? queue[head++] : -1);
      break;
    case "size":
      output.push(queue.length - head);
      break;
    case "empty":
      output.push(queue.length - head === 0 ? 1 : 0);
      break;
    case "front":
      output.push(queue.length > head ? queue[head] : -1);
      break;
    case "back":
      output.push(queue.length > head ? queue[queue.length - 1] : -1);
      break;
  }
}

console.log(output.join("\n"));
