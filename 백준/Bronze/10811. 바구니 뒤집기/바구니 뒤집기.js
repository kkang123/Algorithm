const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const baskets = Array.from({ length: N }, (__, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  let left = start - 1;
  let right = end - 1;

  while (left < right) {
    const temp = baskets[left];
    baskets[left] = baskets[right];
    baskets[right] = temp;

    left++;
    right--;
  }
}

console.log(baskets.join(" "));

// 투포인터 사용
