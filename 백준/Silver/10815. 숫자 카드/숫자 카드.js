const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input.shift());
const myCards = new Set(input.shift().split(" ").map(Number));
const M = Number(input.shift());
const cards = input.shift().split(" ").map(Number);
let res = [];

for (let i = 0; i < M; i++) {
  res.push(myCards.has(cards[i]) ? 1 : 0);
}

console.log(res.join(" "));
