import math

def solution(a, b, c):
    res = 0
    
    if a == b and b == c and c == a:
        res = (a + b + c) * (math.pow(a,2) + math.pow(b,2) + math.pow(c,2)) * (math.pow(a,3) + math.pow(b,3) + math.pow(c,3))
    elif a == b or b == c or c == a:
        res = (a + b + c) * (math.pow(a,2) + math.pow(b,2) + math.pow(c,2))
    else:
        res = (a + b + c)
        
    return res
