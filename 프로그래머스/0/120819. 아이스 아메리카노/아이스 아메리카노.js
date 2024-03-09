function solution(money) {
    let wallet = []
    
    let ice = parseInt(money / 5500)
    let coin  = money % 5500
    
    wallet[0] = ice
    wallet[1] = coin
    
    return wallet
}


// 아이스아메리카노 한 잔에 5500
// 최대로 먹을 수 있는 아메리카노 잔과 남은 돈은 배열에 리턴
