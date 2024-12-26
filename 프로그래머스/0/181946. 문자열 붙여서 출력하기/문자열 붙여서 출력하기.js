const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    
    // 백틱
    // console.log(`${str1}${str2}`)
    
    // 일반 합치기
    // const res = str1 + str2
    // console.log(res)
    
    // concat() 함수
    // const res = str1.concat(str2)
    // console.log(res);
    
    // join() 함수
    const res = input.join('');
    console.log(res);
    
});
