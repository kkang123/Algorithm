def solution(my_string, overwrite_string, s):
    list_1 = list(my_string)
    list_2 = list(overwrite_string)
    j = 0
    
    for i in range(s, s + len(list_2)):
        list_1[i] = list_2[j]
        j += 1
    answer = ''.join(list_1)
        
    return answer
