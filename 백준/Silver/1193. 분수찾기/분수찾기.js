const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

let line = 1; // 대각선
let sum = 0;

while (sum + line < input) {
  sum += line;
  line++;
}

let index = input - sum;

let numerator, denominator;

// 대각선의 방향이 홀수면 분자가 큰 쪽부터 시작
if (line % 2 === 1) {
  numerator = line - index + 1;
  denominator = index;
} else {
  numerator = index;
  denominator = line - index + 1;
}

console.log(`${numerator}/${denominator}`);
