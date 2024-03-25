function solution(n, arr1, arr2) {
    const answer = [];
    
    for(let i=0; i<n; i++){
        let bit = (arr1[i] | arr2[i]).toString(2); 
        
        bit = bit.padStart(n, "0");
        let row = bit.replace(/1/g, "#").replace(/0/g, ' ');
        answer.push(row);
    }
        
    return answer;
}


