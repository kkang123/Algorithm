function solution(arr, n) {
    return arr.map((num, i) =>{
        if(arr.length % 2 === 0 && i % 2 === 1){
            return num + n
        }else if (arr.length % 2 === 1 && i % 2 === 0){
            return num + n
        }
        return num
    });
}
