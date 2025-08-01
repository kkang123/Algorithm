function solution(board, moves) {
    let removedCount = 0;
    let basket = [];
    
    
  for (let move of moves) {
    const col = move - 1; 
      
    for(let row = 0; row < board.length; row++){
        const doll = board[row][col];
        
        if(doll !== 0){
            board[row][col] = 0;
            
            if(basket[basket.length - 1] === doll){
                basket.pop()
                removedCount += 2;
            }else {
                basket.push(doll)
            }
            break;
            }
        }     
    }
      
    return removedCount;
}
