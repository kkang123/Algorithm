// function solution(n){
    // res = ''
    // for(i = 0; i < n.length; i++){
    //     res += "*".repeat(i);
    // }
    // return res;
// }


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // console.log(Number(input[0]));
    res = ''
    for(i = 1; i <= Number(input[0]); i++){
        res += "*".repeat(i)  + "\n";
        // console.log("*".repeat(i));
    }
    console.log(res);
});

// readline.createInterface()  -> readline.Interface 인스턴스를 생성 -> line 메소드를 많이 사용