function solution(numbers) {
    let answer =  0;
    numbers.forEach(v => {
        answer += v;
    })
    
    answer = answer / numbers.length
    
    
    return answer;
}



//1
/*
function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++){
     sum += arr[i];   // 배열의 요소들을 하나씩 더한다.
    }
    return answer = sum / arr.length; // 더한 값과 배열의 길이(=요소 갯수)를 나눈다.
}
*/

// 2
/*
// reduce() 메서드를 사용해 풀어보기
function solution(arr) {
  return arr.reduce((sum, current) => sum + current) / arr.length;
}
*/