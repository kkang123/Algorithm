// 1

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str) // 추가
});

// readline 모듈은 js 내장 모듈로 사용자의 입력을 console.log로 출력할 수 있도록 해준다.
