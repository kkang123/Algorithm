function solution(binomial) {
    // return eval(binomial)
    
    const [a, op, b] = binomial.split(" ");
    const numA = Number(a);
    const numB = Number(b);
    
    if (op === '+') return numA + numB;
    if (op === '-') return numA - numB;
    if (op === '*') return numA * numB;
}
