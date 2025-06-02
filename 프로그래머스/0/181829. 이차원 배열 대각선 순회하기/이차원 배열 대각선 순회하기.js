function solution(board, k) {
    let res = []
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(i + j <= k){
                res.push(board[i][j])
            }
        }
    }
    return res.reduce((acc, cur) => acc + cur, 0)
}
