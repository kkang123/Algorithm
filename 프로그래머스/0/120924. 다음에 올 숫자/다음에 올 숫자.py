def solution(common):
    if len(common) >= 3:
        if common[1] - common[0] == common[2] - common[1]:  # 등차수열
            a = common[1] - common[0]
            answer = common[-1] + a
        else:  # 등비수열
            b = common[1] // common[0]
            answer = common[-1] * b
            
    return answer
