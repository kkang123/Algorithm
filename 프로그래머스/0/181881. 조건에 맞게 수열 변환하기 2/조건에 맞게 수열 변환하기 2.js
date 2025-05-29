function solution(arr) {
    let count = 0;
    
    
    while(true){
    const next = arr.map((num) =>{
        if(num >= 50 && num % 2 === 0) return num / 2;
        if(num < 50 && num % 2 === 1) return num * 2 + 1;
        return num
    });
        
     if (arr.every((val, i) => val === next[i])) break;

        arr = next;
        count++;
    }

    return count;
}
