function solution(numbers) {
    let res = new Set();
    const len = numbers.length
    
    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            res.add(numbers[i] + numbers[j])
        }
    }
    return [...res].sort((a, b) => a - b);
    
}
