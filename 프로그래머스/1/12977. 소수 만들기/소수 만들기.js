function solution(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let z = j + 1; z < nums.length; z++){
                let sum = nums[i] + nums[j] + nums[z]
                if(isPrime(sum)){
                    count++
                }
            }
        }
    }
    return count
}


function isPrime(n){
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}
