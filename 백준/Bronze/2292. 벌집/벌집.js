const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

let count = 1; // 1번 방
let range = 1; // 누적 끝 방 번호

while (input > range) {
  range += 6 * count;
  count++;
}

console.log(count);
