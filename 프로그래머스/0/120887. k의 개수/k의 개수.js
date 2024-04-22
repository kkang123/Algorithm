// function solution(i, j, k) {
//   let answer = 0;
  
//   for (let num = i; num <= j; num++) {
//     const numString = num.toString();
//     for (let c of numString) {
//       if (c === k.toString()) {
//         answer += 1;
//       }
//     }
//   }
  
//   return answer;
// }



function solution(i, j, k) {
    let a ='';
    for(i; i<=j; i++){
        a += i;
    }

    return a.split(k).length-1; //k의 기준으로잘라줌
}
