function solution(sizes) {
    let res = 0;
    
    let maxX = 0;
    let maxY = 0;
    
    
    for(let [w, h] of sizes){
        const [width, height] = w > h ? [w, h] : [h, w];
        maxX = Math.max(maxX, width)
        maxY = Math.max(maxY, height)
    }
    
    return maxX * maxY
}
