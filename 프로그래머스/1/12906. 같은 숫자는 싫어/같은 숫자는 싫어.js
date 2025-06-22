function solution(arr) {
  let num = [];
  
  for(i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i-1]){
          num.push(arr[i])
      } else {
          continue;
      }
  }
    
    return num
}
