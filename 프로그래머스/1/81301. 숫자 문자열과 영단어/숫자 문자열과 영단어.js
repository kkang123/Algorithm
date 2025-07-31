function solution(s) {
    const numChart = {
    "zero" : 0,
    "one" : 1,
    "two" : 2,
   "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9,
    }
    
    
    
    for(let word in numChart){
        const digit = numChart[word];
        s = s.split(word).join(digit);
    }
    
    // for(const [word, digit] of Object.entries(numChart)) {
    //     s = s.split(word).join(digit)
    // }
    
    return Number(s);

}
