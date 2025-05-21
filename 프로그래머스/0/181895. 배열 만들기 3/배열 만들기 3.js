function solution(arr, intervals) {
    let res = [];
    
    
    for(let i =0; i < intervals.length; i++){
        const [start, end] = intervals[i];
        res.push(...arr.slice(start, end+1))
    }
    
    
    return res;
}
