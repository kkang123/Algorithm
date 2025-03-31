let index = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

console.log(index[0] + index[1] + index[2]);
