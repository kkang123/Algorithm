function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    for(let i=0; i< num_list.length; i++){
        if(num_list[i] % 2 === 0){
            even++; 
        } else{
            odd++;
        }
    }
    
    
    return [even, odd]
}
// function solution(num_list) {
//     total = [];
//     even = [];
//     odd = [];
    
//     for(let i=0; i< num_list.length; i++){
//         if(num_list[i] % 2 === 0){
//             even.push(i);   
//         } else{
//             odd.push(i)
//         }
//     }
    
    
//     total[0] = even.length;
//     total[1] = odd.length;
    
//     return total
// }
