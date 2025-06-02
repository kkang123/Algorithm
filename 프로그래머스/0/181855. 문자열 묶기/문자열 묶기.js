function solution(strArr) {
    let lengthCount = {}
    // 키 : 값
    
    for(let str of strArr){
        const len = str.length;
        lengthCount[len] = (lengthCount[len] || 0) + 1; 
    }
    return Math.max(...Object.values(lengthCount));
}
