function solution(t, p) {
    let count = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        let sliced = t.slice(i, i + p.length);
        if (Number(sliced) <= Number(p)) {
            count++;
        }
    }
    
    return count;
}

