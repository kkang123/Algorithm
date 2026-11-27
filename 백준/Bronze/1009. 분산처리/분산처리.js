// 입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 그 다음 줄부터 각각의 테스트 케이스에 대해 정수 a와 b가 주어진다. (1 ≤ a < 100, 1 ≤ b < 1,000,000)

// 마지막 데이터는 몇 번 컴퓨터에서 처리되는지 구하기 (컴퓨터는 10대 반복)
// 몇 개마다 반복된다는 % 떠올리기

// 지수는 % 4 제곱은 2번 아니면 4번 반복하기 때문
// 밑은 % 10 13 * 13 이나 3 * 3도 동일하기 때문

// 1^6
// 3^7
// 6^2
// 7^100
// 9^635

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = Number(input[0]);
const out = [];

const pow = input;

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].trim().split(" ").map(Number);
  // const pow = a ** b;
  // 함정 : 수가 커지면 Infinity

  const e = b % 4 === 0 ? 4 : b % 4;
  let num = (a % 10) ** e % 10;
  if (num === 0) num = 10;

  out.push(num);
}

console.log(out.join("\n"));