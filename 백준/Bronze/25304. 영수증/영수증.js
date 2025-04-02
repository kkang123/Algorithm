let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
let total = parseInt(input[0]); // 총금액
let count = Number(input[1]); // 물품 갯수

for (let i = 2; i < 2 + count; i++) {
  let arr = input[i].split(" ").map(Number);
  sum += arr[0] * arr[1];
}

console.log(total === sum ? "Yes" : "No");

// parseInt

// 정수로 변환, 문자열의 처음이 숫자가 아니면 NaN 반환 하지만 숫자로 시작하면 숫자만 반환, 두 번 째 인자에 진법 지정 가능, 소수점 이하는 버림

//Number

// 숫자와 문자가 섞기면 NaN, 실수 정수 가능, 진법 설정 불가능

// let을 붙쳐 지역변수로 선언 메모리 관리 효율적이고 불필요한 전역 변수 생성 방지 가능
