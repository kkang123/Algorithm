def solution(price, money, count):
    res = 0
    
    for i in range(1, count+1):
        res += price * i

    return res - money if res > money else 0