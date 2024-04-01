function solution(array, height) {
    let answer = 0;
    
    
    array.forEach((item) => {
        if(item > height){
            answer += 1
        }
    });
    
    return answer
}



// for...in는 객체에서 사용...
// for(let i=0; i<array.length; i++) {
//         if(array[i] > height){
//             answer += 1
//         }
//     }
//     return answer