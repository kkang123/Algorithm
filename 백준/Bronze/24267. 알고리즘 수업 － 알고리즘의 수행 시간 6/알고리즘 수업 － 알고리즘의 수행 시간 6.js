const n = BigInt(require("fs").readFileSync("/dev/stdin").toString().trim());

const result = (n * (n - 1n) * (n - 2n)) / 6n;

console.log(result.toString()); // 수행 횟수
console.log(3); // 다항식 차수