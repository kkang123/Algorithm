function solution(priorities, location) {
    const queue = priorities.map((priority, idx) => ({ idx, priority }));
    let count = 0;
    
    while(queue.length > 0){
        const current = queue.shift();
        
        const hasHigher = queue.some(item => item.priority > current.priority);
        
        if(hasHigher){
            queue.push(current)
        } else {
            count++
            if(current.idx === location){
                return count
            }
        }
    }  
}
