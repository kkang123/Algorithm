function solution(ingredient) {
    const stack = [];
    let count = 0;
    
    for (let x of ingredient) {
        stack.push(x);
        
        if (stack.length >= 4) {
            let lastFour = stack.slice(-4).join("");
            if (lastFour === "1231") {
                stack.splice(-4); // 햄버거 제거
                count++;
            }
        }
    }
    return count;
}
