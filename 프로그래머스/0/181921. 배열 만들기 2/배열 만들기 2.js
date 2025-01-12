function solution(l, r) {
    let answer = [];
    
    for(let i=l; i <= r; i++){
        if(/^[50]+$/.test(i.toString())) {   
            answer.push(i);
        }
    }
    
    if(answer.length === 0){
            return [-1];
        }
    
    return answer;
}
