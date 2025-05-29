// function solution(myString, pat) {
//     const regex = new RegExp(`(?=${pat})`, 'g');
//   const matches = [...myString.matchAll(regex)];
//   return matches.length;
// }

function solution(myString, pat) {
    let count = 0;
    let pos = 0;
    
    while(true) {
        pos = myString.indexOf(pat, pos);
        if(pos === -1) break;
            count++
            pos += 1
    }
    
    return count
}

