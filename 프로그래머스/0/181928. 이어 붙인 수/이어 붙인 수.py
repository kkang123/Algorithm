def solution(num_list):
    odd_str = ''
    even_str = ''
    
    for num in num_list:
        if num % 2 == 0:
            even_str += str(num)
        else:
            odd_str += str(num)
    
    # 홀수와 짝수를 이어 붙인 후 정수로 변환
    odd_num = int(odd_str)
    even_num = int(even_str)
    
    return odd_num + even_num
