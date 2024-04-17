function solution(num, total) {
    let d = 0;
    for (var i = 1; i < num; i++) {
        d += i;
    }
    
    let start = Math.floor((total - d) / num);
    
    let answer = [];
    for (var i = start; i < start + num; i++) {
        answer.push(i);
    }
    
    return answer;
}
