def solution(s):
    res = []
    
    for i in s:
        if i == '(':
            res.append(i)
        else: # 만약 ( 아니라면 두가지 경우를 확인하는데 비어 있는 경우에는 false, ) 일 경우에는 pop
            if res == []:
                return False
            else :
                res.pop()
            
    return res == []  # res가 [](빈 배열)과 동일하다면? True 반환, res 안에 문자가 있다면 동일하지 않기 때문에 false 반환
