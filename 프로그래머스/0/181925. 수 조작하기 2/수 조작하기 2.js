// function solution(numLog) {
//     let answer = [];
    
    
//     for(let i = 1; i < numLog.length; i++){
//         if(numLog[i] === numLog[i-1] + 1){
//             answer.push('w')
//         } else if(numLog[i] === numLog[i-1] - 1){
//             answer.push('s')
//         } else if(numLog[i] === numLog[i-1] + 10){
//             answer.push('d')
//         } else {
//             answer.push('a')
//         }
//     }
    
//     return answer.join('');
// }


function solution(numLog) {
    let answer = [];
    
    const moveMap = {
        1: 'w',
        '-1': 's',
        10: 'd',
        '-10': 'a'
    };
    
    for (let i = 1; i < numLog.length; i++) {
        let diff = numLog[i] - numLog[i - 1];
        answer.push(moveMap[diff]);
    }
    
    return answer.join('');
}

// 객체는 기본적으로 문자열로 저장하기 때문에 음수는 ' '로 감싸줘야한다.
