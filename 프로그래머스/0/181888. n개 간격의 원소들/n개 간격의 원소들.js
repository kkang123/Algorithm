function solution(num_list, n) {
    let answer = [];
    
    for(let i = 0; i < num_list.length; i += n){
        answer.push(num_list[i])
    }
    
    return answer;
}


// function solution(num_list, n) {
//   return num_list.filter((_, idx) => idx % n === 0)
// }
