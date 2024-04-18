def solution(a, b):
    answer = 0
    
    for i in range(len(a)):
        answer += a[i] * b[i]
    
    return answer

# def solution(a, b):
#     res = []
#     for i in range(len(a)):
#         res.append(a[i]*b[i])
#     return sum(res)
