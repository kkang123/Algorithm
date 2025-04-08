function solution(my_string) {
    let arr = Array(52).fill(0)
    
    for(let i =0; i<my_string.length; i++){
       let word = my_string.charCodeAt(i)
       if(word >= 65 && word <= 90){
           arr[word - 65]++;
       }else{
           arr[word - 71]++;
       }
        
    }
    return arr;
}
