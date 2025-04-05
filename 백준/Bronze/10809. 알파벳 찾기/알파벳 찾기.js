const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const res = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const charCode = input.charCodeAt(i) - 97;
  if (res[charCode] === -1) {
    res[charCode] = i;
  }
}

console.log(res.join(" "));
