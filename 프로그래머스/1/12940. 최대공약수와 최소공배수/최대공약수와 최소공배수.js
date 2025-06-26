function solution(n, m) {
    
    
    function GCD(a,b){
        return b === 0 ? a : GCD(b, a % b)
    }
    
    function LCM(a, b){
        return (a * b) / GCD(a, b)
    }
    
    return [GCD(n, m), LCM(n, m)]
}
