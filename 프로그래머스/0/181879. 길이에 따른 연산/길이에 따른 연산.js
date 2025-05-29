function solution(num_list) {
//     let len = num_list.length
//     let res = (len >= 11) ? 0 : 1;
    
//     for(let i = 0; i < len; i++){
//         if(len >= 11){
//             res += num_list[i]
//         } else {
//             res *= num_list[i]
//         }
//     }
    
//     return res
    
    return num_list.reduce((a, c) => num_list.length > 10? a + c : a * c)
}
