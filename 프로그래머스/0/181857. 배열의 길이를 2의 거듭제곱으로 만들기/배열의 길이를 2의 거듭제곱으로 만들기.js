function solution(arr) {
    let len = arr.length;
    let pos = 1
    
    
    while(pos < len){
        pos *= 2
    }
    
   while(arr.length < pos){
       arr.push(0)
   }
    
    return arr
}
