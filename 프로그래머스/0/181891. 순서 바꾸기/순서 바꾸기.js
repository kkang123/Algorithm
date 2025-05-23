function solution(num_list, n) {
    let answer = [];
    
    for(let i = n; i < num_list.length; i++){
        answer.push(num_list[i])
    }
    
    answer.push(...num_list.slice(0,n))
    
    return answer;
}

