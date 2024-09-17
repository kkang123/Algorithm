def solution(num_list):
    full_sums = 1
    sum_nums = 0
    
    for i in num_list:
        full_sums *= i
        sum_nums += i
        
        sums = sum_nums ** 2
    
    return 1 if full_sums < sums else 0
