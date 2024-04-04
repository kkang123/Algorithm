def solution(absolutes, signs):
    res = 0
    
    for i in range(len(absolutes)):
        if signs[i]:
            res += absolutes[i]
        else:
            res -= absolutes[i]

    return res

# if else 문을 사용해서 if일 때는 True를 의미 else일 때는 False를 의미
