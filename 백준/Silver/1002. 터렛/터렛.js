const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const out = [];

for (let i = 1; i <= T; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i].trim().split(' ').map(Number);
  const d2 = (x1 - x2) ** 2 + (y1 - y2) ** 2;
  const sum2 = (r1 + r2) ** 2;
  const diff2 = (r1 - r2) ** 2;

  if (d2 === 0 && r1 === r2) out.push(-1);
  else if (d2 > sum2 || d2 < diff2) out.push(0);
  else if (d2 === sum2 || d2 === diff2) out.push(1);
  else out.push(2);
}

out.forEach(n => console.log(n))