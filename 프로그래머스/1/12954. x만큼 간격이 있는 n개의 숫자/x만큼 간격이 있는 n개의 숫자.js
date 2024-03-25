function solution(x, n) {
    let answer = [];
    let gap = x;
    
    for(let i = 0; i < n; i++){
        answer.push(x)
        x += gap;
    }
    return answer
}