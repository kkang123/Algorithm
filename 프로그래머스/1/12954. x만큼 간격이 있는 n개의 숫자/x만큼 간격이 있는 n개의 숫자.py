def solution(x, n):
    answer = []
    gap = x
    
    for i in range(n):
        answer.append(x)
        x += gap
    
    return answer