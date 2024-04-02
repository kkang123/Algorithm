def solution(dartResult):
    score = []
    
    temp = ''
    
    for char in dartResult:
        if char.isdigit(): # 문자열 구성이 숫자로만 이루어져 있으면 true 반환
            temp += char
            
        elif char in ['S', 'D', 'T']:
            if char == 'S':
                score.append(int(temp))
            elif char == 'D':
                score.append(int(temp) ** 2)
            elif char == 'T':
                score.append(int(temp) ** 3)
            temp = ''
            
        elif char in ['*', '#']:
            if char == '*':
                if len(score)>1:
                    score[-2] *= 2
                score[-1] *= 2
            elif char == '#':
                score[-1] *= -1
                
    return sum(score)

