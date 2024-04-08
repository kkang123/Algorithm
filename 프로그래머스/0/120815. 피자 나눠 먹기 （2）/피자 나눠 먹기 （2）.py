# def solution(n):
#     for i in range(1, n+1):
#         if (6 * i) % n == 0:
#             return i
        
def solution(n):
    i=1
    while(1):
        if (6*i)%n==0:
            return i
        i+=1
        
# while문이 1이기 때문에 True
# if문은 거짓이기 때문에 return을 반환 안하는 구조
# 그래서 아래 i+= 1이 실행 이 과정을 if문이 True 일 때까지 반복
    