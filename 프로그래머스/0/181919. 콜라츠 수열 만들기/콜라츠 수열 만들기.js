function solution(n) {
    let answer = [];
    
    
    while(n !== 0){
         answer.push(n)
        if(n===1) break;
        if(n % 2 === 0){
            n /= 2
        } else if (n % 2 === 1){
            n = 3 * n + 1
        } 
    }

    return answer;
}
