function solution(price) {
    if (price >= 500000){
        return price - Math.floor(price * 0.2)
    }else if (price >= 300000) {
        return price - Math.floor(price * 0.1)
    } else if (price >= 100000){
        return Math.floor(price-(price * 0.05))
    }
    else{                               
        return price
    }
}

// 10만원 이상
// 30만원 이상 구매 시 10%
// 50만원 이상 구매 시 20% 
