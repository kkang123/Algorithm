# import math

# def solution(slice, n):
#     return math.ceil(n / slice)


# 피자를 2~10 사이에 원하는 조각 수로 잘라줌(slice)

def solution(slice, n):
    return ((n-1) // slice) + 1
