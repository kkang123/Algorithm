function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    let scores = [0, 0 ,0];
    
    answers.forEach((answer, i) => {
        patterns.forEach((pattern, idx) => {
            if(answer === pattern[i % pattern.length]){
                scores[idx]++
            }
        });
    });
    
    const maxScore = Math.max(...scores);
    
    return scores.map((score, idx) => (score === maxScore ? idx + 1 : null)).filter((v) => v !== null);
}

