const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(input === input.split("").reverse().join("") ? 1 : 0);
