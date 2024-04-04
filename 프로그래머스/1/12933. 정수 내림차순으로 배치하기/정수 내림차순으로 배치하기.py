def solution(n):
    answer = 0
    
    sorted_str = sorted(str(n), reverse=True)
    join_str = ''.join(sorted_str)
    answer = int(join_str)
    
    return answer