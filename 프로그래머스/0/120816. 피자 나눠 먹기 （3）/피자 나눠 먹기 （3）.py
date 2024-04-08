import math

def solution(slice, n):
    return math.ceil(n / slice)


# 피자를 2~10 사이에 원하는 조각 수로 잘라줌(slice)

# def solution(slice, n):
#     return ((n-1) // slice) + 1

# 다른 사람의 풀이 수식 사용 코드인데 n-1하는 것부터 어떤 접근식인지 모르겠음
