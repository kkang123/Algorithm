const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const k = Number(input.shift());
const node = input[0].split(" ").map(Number);

const levelNodes = Array.from({ length: k }, () => []);

function build(level, start, end) {
  if (start > end) return;

  const mid = Math.floor((start + end) / 2);
  levelNodes[level].push(node[mid]);

  build(level + 1, start, mid - 1); 
  build(level + 1, mid + 1, end); 
}

build(0, 0, node.length - 1);


for (let level of levelNodes) {
  console.log(level.join(" "));
}
