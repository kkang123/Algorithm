const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  const temp = baskets[start - 1];
  baskets[start - 1] = baskets[end - 1];
  baskets[end - 1] = temp;
}

console.log(baskets.join(" "));

// 입력 값은 바구니 번호
