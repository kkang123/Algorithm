let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = input[0].split('');
let b = input[1].split('');

let first = Number(input[0]) * Number(b[2]);
let second = Number(input[0]) * Number(b[1]);
let third = Number(input[0]) * Number(b[0]);



console.log(first);
console.log(second);
console.log(third);
console.log(input[0] * input[1]);
