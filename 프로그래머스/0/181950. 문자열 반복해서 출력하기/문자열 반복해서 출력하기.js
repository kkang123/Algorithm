const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    // console.log(str.repeat(n))
    temp = ''
    
    for(let i = 0; i < n; i++ ){
        temp += str
    }console.log(temp)
});


// console.log(str.repeat(n)) - 간단, 반복할수록 메모리 증가(for문 보단 낮음)
