def solution(n):
    answer = 0
    
    sorted_str = sorted(str(n), reverse=True)
    join_str = ''.join(sorted_str)
    answer = int(join_str)
    
    return answer

# sort는 리스트에서만 사용 / sorted는 문자열, 튜플, 리스트 사용가능
