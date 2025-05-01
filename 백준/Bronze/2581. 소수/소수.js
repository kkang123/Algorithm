
const [M, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

let prime = [];

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    prime.push(i);
  }
}

if (prime.length === 0) {
  console.log(-1);
} else {
  const sum = prime.reduce((acc, cur) => acc + cur, 0);
  const min = Math.min(...prime);
  console.log(sum);
  console.log(min);
}
