function solution(array, n) {
    answer = 0;
    
    array.forEach(a => {
       if(a === n){
           answer += 1
       }
    });
    return answer
}

    // return array.filter((a) => a === n).length