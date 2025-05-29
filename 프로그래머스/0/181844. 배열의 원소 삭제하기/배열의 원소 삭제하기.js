function solution(arr, delete_list) {
    return arr.filter(num => !delete_list.includes(num))
}


// function solution(arr, delete_list) {
//  let res = []
 
//  for(let i = 0; i < arr.length; i++){
//      let shouldDelete = false;
     
//      for(let j = 0; j < delete_list.length; j++){
//          if(arr[i] === delete_list[j]){
//              shouldDelete = true;
//              break;
//          }
//      }
     
//      if(!shouldDelete){
//         res.push(arr[i])
//         }
//     }
//     return res
    
// }
