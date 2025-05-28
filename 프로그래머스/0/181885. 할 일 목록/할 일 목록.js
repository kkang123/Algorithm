function solution(todo_list, finished) {
    let answer = [];
    
    for(let i = 0; i<todo_list.length; i++){
            if(finished[i] === false){
                answer.push(todo_list[i])
        }
    }    
    return answer
}


// function solution(todo_list, finished) {
//   return todo_list.filter((_, i) => !finished[i]);
// }
