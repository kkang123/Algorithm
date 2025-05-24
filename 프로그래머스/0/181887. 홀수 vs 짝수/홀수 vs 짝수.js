function solution(num_list) {
    const oddSum = num_list.filter((_, idx) => idx % 2 === 0).reduce((acc, cur) => acc + cur, 0);
    
    const evenSum = num_list.filter((_, idx) => idx % 2 === 1).reduce((acc, cur) => acc + cur, 0)
    
    return Math.max(oddSum, evenSum);
}



// function solution(num_list) {
//     let odd = 0; 
//     let even = 0;
    
//     for(let i = 0; i < num_list.length; i++){
//         if(i % 2 === 0){
//             odd += num_list[i];
//         } else {
//             even += num_list[i];
//         }
//     }
    
//     return Math.max(odd, even)
// }
