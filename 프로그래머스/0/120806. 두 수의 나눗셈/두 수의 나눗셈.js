function solution(num1, num2) {
    let answer = 0;
    answer = (num1 / num2) * 1000
    // return parseInt(answer);
    // return ~~(answer);
    return Math.floor(answer);
}

// ~~틸트함수나 Math.floor (내림 사용 가능)