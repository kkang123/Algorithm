function solution(n) {
   let answer = 0;
    
    let sortedStr = String(n).split('').sort((a, b) => b - a).join('');
    answer = parseInt(sortedStr, 10);
    
    return answer;
}
