def solution(bin1, bin2):
    # bin() 함수의 결과는 앞에 '0b'가 붙으므로 [2:]를 사용하여 '0b'를 제거
    result = bin(int(bin1, 2) + int(bin2, 2))[2:]
    return result
