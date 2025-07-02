function solution(s) {
    const res = [];
    const lastIndex = {}; 
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (lastIndex[char] === undefined) {
            res.push(-1);
        } else {
            res.push(i - lastIndex[char]);
        }

        lastIndex[char] = i;
    }

    return res;
}

