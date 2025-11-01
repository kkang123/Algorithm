const input = require("fs")
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

for (let t = 0; t < T; t++) {
  const N = Number(input[t * 2]);
  const pigs = input[t * 2 + 1].split(" ").map(Number);

  let day = 1;

  while (true) {
    const total = pigs.reduce((a, b) => a + b, 0);

    if (total > N) {
      console.log(day);
      break;
    }

    const next = Array(6).fill(0);
    for (let j = 0; j < 6; j++) {
      const left = (j + 5) % 6;
      const right = (j + 1) % 6;
      const opposite = (j + 3) % 6;

      next[j] = pigs[j] + pigs[left] + pigs[right] + pigs[opposite];
    }
    for (let j = 0; j < 6; j++) pigs[j] = next[j];
    day++;
  }
}
