def solution(num_list):
    answer = num_list.copy()
    
    if(num_list[-1] > num_list[-2]):
        res = num_list[-1] - num_list[-2]
    else:
        res = num_list[-1] * 2

    
    answer.append(res)
    
    return answer
