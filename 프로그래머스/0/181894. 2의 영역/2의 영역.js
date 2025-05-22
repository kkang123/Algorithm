// function solution(arr) {
//     let first = arr.indexOf(2);
//     let last = arr.lastIndexOf(2);
    
//     if(first === -1) return [-1]
    
//     return arr.slice(first, last + 1);
// }


function solution(arr) {
  let first = -1;
  let last = -1;


  for(let i = 0; i<arr.length; i++){
      if(arr[i] === 2){
          if(first === -1){
              first = i
          }
          last = i
      }
  }
    
    if (first === -1) return [-1]
    
    let res = []
    
    for(let i=first; i<last+1; i++){
        res.push(arr[i])
    }
    
    return res
}
