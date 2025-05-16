// function solution(start_num, end_num) {
//     let answer = [];
    
//     for(let i = end_num; i <= start_num; i++){
//         answer.push(i);
//     }
    
//     return answer.reverse();
// }

function solution(start, end) {
    let answer = [];

    for(let i = start; i>=end; i--){
        answer.push(i)
    }

    return answer;
}

