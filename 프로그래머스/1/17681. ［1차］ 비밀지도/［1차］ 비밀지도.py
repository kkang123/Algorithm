# 1
def solution(n, arr1, arr2):
    answer = []
    
    for i in range(n):
        bit = bin(arr1[i] | arr2[i])[2:]
        
        bit = bit.rjust(n, '0')
        
        row = bit.replace('1', '#').replace('0', ' ')
        answer.append(row)
        
    return answer


# 2. 수업 풀이

# def solution(n, arr1, arr2):
#     answer = []
#     for i, j in zip(arr1, arr2):
#         answer.append(bin(i | j)[2:].zfill(n).replace('1', "#").replace('0', ' '))
#     return answer



# 1번 코드 설명 

# bit = bin(arr1[i] | arr2[i])[2:] bin은 2진수 변환 0b가 붙어서 출력됨
# 그래서 앞의 0b를 떼기 위해 [2: ] 를 하여 앞에 0 , 1번 자리를 슬라이스


# 메서드

# rjust(width[, fillchar]) n만큼 fillchar로 앞 채워주기
# ljust(width[, fillchar]) n만큼 fillchar로 뒤 채워주기
# center(width[, fillchar]) n만큼 fillchar로 양옆 공백 채워주기

# zfill(width) -  문자열의 길이가 지정된 너비에 도달할 때까지 문자열의 시작 부분에 '0'을 추가
