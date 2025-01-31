function solution(my_string) {
    let answer = [];
    
    for(let i = 0; i < my_string.length; i++){
        answer.push(my_string.slice(i))
    }
    
    return answer.sort();
}


// function solution(my_string) {
//     let answer = my_string.split('').map((_, i) => my_string.slice(i)).sort();
//     return answer;
// }
