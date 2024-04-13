def solution(chicken):
    answer = 0
    
    while chicken >= 10:
        div = chicken // 10
        answer += div
        chicken = div + (chicken % 10)
    
    return answer
    
    
    
# 기존 js로 풀었던 내용을 파이썬으로 바꿔서 풀어보니 모두가 시간 초과 발생
#     res = 0
    
#     while chicken >= 0:
#         div = chicken // 10
#         mod = chicken % 10
#         res += div
#         chicken = div + mod
    
#     return res
