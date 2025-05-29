function solution(myString, pat) {
    // return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
    
    return +(myString.toUpperCase().includes(pat.toUpperCase()));
}
